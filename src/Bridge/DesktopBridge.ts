/**
 * Windows Bridge
 * @module
 */ /** */
/* tslint:disable:no-any no-namespace */
import { debug, identity, upperFirst } from '../utils'
import Bridge from './Bridge'

export type ResponseCallback = (responseData: any) => void
export type Callback = (data: any, responseCallback?: ResponseCallback) => void
export interface RegisterHandlerOptions<S = any, R = any> {
  beforeSend: (data: S) => string | undefined
  afterReceived: (data: R) => any
  preserveName: boolean
  bridgeHandleName?: string
}

// Bridge扩展的window接口
declare global {
  interface Window {
    /**
     * 这是Bridge 调用回调的接口
     * @param data Bridge 返回的数据
     * @param id 回调id
     */
    exeCallback(data: any, id: string): void
    /**
     * 这是Bridge 提供的主要接口，用于调用Bridge的Handle
     * TODO data是什么类型
     * @param handlerName Handler 名
     * @param data 传输的数据
     * @param callbackId 回调函数ID，Bridge在完成操作后会通过window.exeCallback
     * 来调用回调。不是所有Handler的回调都会被触发，取决于PC端的实现
     */
    HandleEvent(handlerName: string, data: any, callbackId?: string): void
  }
}

let uniqId = 0
const defaultRegisterOptions: RegisterHandlerOptions = {
  beforeSend: data => (data ? JSON.stringify(data) : undefined),
  afterReceived: identity,
  preserveName: false,
}

export default class DesktopBridge {
  private static instance: DesktopBridge
  private static normalizedBridge: Bridge
  private listeners: { [handlerName: string]: Callback[] } = {}
  /**
   * 保存客户端回调
   */
  private responseCallbacks: { [id: string]: ResponseCallback } = {}

  /**
   * 获取单例实例
   * @static
   */
  public static getInstance() {
    if (this.instance == null) {
      return (this.instance = new DesktopBridge())
    }
    return this.instance
  }

  /**
   * 返回规范化的bridge 对象
   */
  public static getNormalizedBridge(): Bridge {
    const instance = this.getInstance()
    if (this.normalizedBridge == null) {
      return (this.normalizedBridge = {
        callHandler: (
          handlerName: string,
          data: any,
          responseCallback: ResponseCallback,
        ) => {
          instance.emit(`[s]${handlerName}`, data, responseCallback)
        },
        registerHandler: (handlerName: string, handler: Callback) => {
          instance.addListener(`[c]${handlerName}`, handler)
        },
      })
    }
    return this.normalizedBridge
  }

  /**
   * 通知订阅者
   * @param handlerName Handler 名
   * @param data 是准备发送给Bridge的数据
   * @param reponseCallback 是Bridge执行完毕后的回调
   */
  public emit(
    handlerName: string,
    data: any,
    responseCallback: ResponseCallback,
  ): void {
    const listeners = this.listeners[handlerName]
    if (listeners && listeners.length) {
      listeners.forEach(listener => listener.call(this, data, responseCallback))
    } else {
      throw new Error(
        `[Windows Bridge]: ${handlerName} not registered(PC 端未支持该接口)`,
      )
    }
  }

  /**
   * 添加订阅者
   * @param handlerName 
   * @param callback 
   */
  public addListener(handlerName: string, callback: Callback) {
    const listener = this.listeners[handlerName] || []
    this.listeners[handlerName] = listener.concat(callback)
    return () => {
      this.removeListener(handlerName, callback)
    }
  }

  /**
   * 移除订阅者
   * @param handlerName 
   * @param callback 
   */
  public removeListener(handlerName: string, callback: Callback) {
    const listeners = this.listeners[handlerName]
    if (listeners && listeners.length) {
      const index = listeners.indexOf(callback)
      if (index !== -1) {
        listeners.splice(index, 1)
      }
    }
  }

  /**
   * 保存回调函数，以便给Bridge进行回调
   * @param handlerName  处理器名
   * @param responseCallback  回调
   * @param id 唯一id
   */
  public addCallback(
    handlerName: string,
    responseCallback: ResponseCallback,
    id: string = `cb_${handlerName}_${uniqId++}`,
  ) {
    this.responseCallbacks[id] = responseCallback
    return id
  }

  /**
   * 调用使用addCallback保存的回调, 这个主要被Bridge调用
   * @param id 
   * @param data 
   */
  public callCallback(id: string, data: any) {
    const callback = this.responseCallbacks[id]
    if (callback) {
      callback(data)
    }
    delete this.responseCallbacks[id]
  }

  /**
   * 注册一个Handler, 用于向Bridge 发送消息
   * @param handlerName Handler 名
   * @param options 选项
   * + beforeSend: 在发送之前对数据进行预处理, 默认使用JSON.stringify转换为字符串，注
   * 意Bridge只接受字符串
   * + afterReceived: 在调用回调之前，对Bridge返回的数据进行转换
   * + preserveName: 是否对HandlerName进行转换，按照规范转换为 On<Name>形式， 不过一
   * 些接口没有安装规范来, 通过设置这个接口为true，避免转换HandlerName， 默认为false
   */
  public registerHandler<S = any, R = any>(
    handlerName: string,
    options: Partial<RegisterHandlerOptions<S, R>> = {},
  ): this {
    const _options: RegisterHandlerOptions = {
      ...defaultRegisterOptions,
      ...options,
    }
    this.registerBridgeHandler(handlerName, (data: S, responseCallback) => {
      let callbackId
      if (typeof responseCallback === 'function') {
        callbackId = this.addCallback(handlerName, (receivedData: R) => {
          if (
            process.env.NODE_ENV === 'development' ||
            process.env.JM_DEBUG === 'true'
          ) {
            debug(
              `[Window Bridge]: >> 回调 ${handlerName} with data: \n`,
              '-- payload: ',
              receivedData,
            )
          }
          responseCallback(_options.afterReceived(receivedData))
        })
      } else if (
        process.env.NODE_ENV === 'development' ||
        process.env.JM_DEBUG === 'true'
      ) {
        // 始终传入回调, 以便调试
        callbackId = this.addCallback(handlerName, (receivedData: R) => {
          debug(
            `[Window Bridge]: >> Handler 响应 ${handlerName}\n-- payload: `,
            receivedData,
          )
        })
      }

      const bridgeHandlerName =
        _options.bridgeHandleName ||
        (_options.preserveName ? handlerName : `On${upperFirst(handlerName)}`)
      const payload = _options.beforeSend(data)
      if (
        process.env.NODE_ENV === 'development' ||
        process.env.JM_DEBUG === 'true'
      ) {
        debug(
          `[Window Bridge]: << 调用 Handler ${handlerName} -> ${bridgeHandlerName}\n`,
          '-- payload: ',
          payload,
          `\n-- callbackId: ${callbackId}`,
        )
      }
      window.HandleEvent(bridgeHandlerName, payload, callbackId)
    })
    return this
  }

  /**
   * 只为了兼容 openMail 这个接口
   * @deprecated
   */
  public deprecatedRegisterHandler(
    handlerName: string,
    handler: Callback,
  ): this {
    this.registerBridgeHandler.call(this, handlerName, handler)
    return this
  }

  public callClientHandler(
    handlerName: string,
    data: any,
    responseCallback: ResponseCallback,
  ) {
    this.emit(`[c]${handlerName}`, data, responseCallback)
  }

  /**
   * 用于注册一个订阅者，这个订阅者将在调用this.emit时立即调用。 这里的订阅者主要用于
   * 向Bridge发送消息
   * @param  handlerName Handler名
   * @param  handler 回调
   */
  private registerBridgeHandler(handlerName: string, handler: Callback) {
    this.addListener(`[s]${handlerName}`, handler)
  }

  private constructor() {
    if (typeof window.HandleEvent === 'undefined') {
      console.warn(`[Window Bridge] 初始化异常，window.HandleEvent 为undefined. 这可能说明SDK运行在没有Bridge的环境
        请使用Device.bridgeAvailable()来判断当前环境是否支持。
        `)
    }
  }
}

window.exeCallback = (data, id) => {
  DesktopBridge.getInstance().callCallback(id, data)
}

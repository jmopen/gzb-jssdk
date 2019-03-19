/**
 * 实现rpc接口
 */
import Device from './DeviceDetector'
import { Bridge, DesktopBridge, MobileBridge } from './Bridge'
/* tslint:disable:no-any */

interface Bridger {
  setUpBridge(callback: (bridge: Bridge) => void): void
}

/**
 * JSONRPC 请求
 */
export interface JSONRPCRequest<T> {
  jsonrpc: '2.0'
  method: string
  id: string | number
  params?: T
}

/**
 * JSONRPC 事件
 */
export interface JSONRPCEvent<T> {
  jsonrpc: '2.0'
  method: string
  params?: T
}

/**
 * JSONRPC 错误对象
 */
export interface JSONRPCError {
  code: number
  message: string
  // tslint:disable-next-line:no-any
  data?: any
}

/**
 * 成功响应
 */
export interface JSONRPCResponseSuccess<T> {
  jsonrpc: '2.0'
  id: string | number
  result: T
}

/**
 * 失败响应
 */
export interface JSONRPCResponseError {
  jsonrpc: '2.0'
  id: string | number
  error: JSONRPCError
}

export enum JSONRPCErrorCode {
  NotFound = 404,
  ClientError = 500,
}

/**
 * 响应
 */
export type JSONRPCResponse<T> =
  | JSONRPCResponseSuccess<T>
  | JSONRPCResponseError

export const METHOD_NAME = 'rpc'
export const PROTOCOL_ERROR = 0

/**
 * request 错误
 */
export class RPCError extends Error {
  public code: number
  public error?: JSONRPCError
  public constructor(code: number, errMsg: string, error?: JSONRPCError) {
    super(errMsg)
    this.code = code
    this.error = error
    Object.setPrototypeOf(this, RPCError.prototype)
  }
}

/**
 * 响应给客户端的错误对象
 */
export class RPCHandlerError extends Error {
  public constructor(public code: number, msg: string, public data: any) {
    super(msg)
    Object.setPrototypeOf(this, RPCHandlerError.prototype)
  }
}

export default class RPC {
  private static instance: RPC
  private bridge: Bridger
  private uid: number = 0
  // JS端回调
  private handlers: {
    [method: string]: {
      callback: Array<(params: any) => any>
    }
  } = {}

  public static getInstance() {
    if (this.instance) {
      return this.instance
    }
    return (this.instance = new RPC())
  }

  /**
   * 原始接口
   */
  // 事件订阅模式
  public async raw<R, P>(
    payload: JSONRPCEvent<R>,
    cb: (params: P) => void,
  ): Promise<void>
  // 普通请求模式
  public async raw<R, S>(
    payload: JSONRPCRequest<R>,
  ): Promise<JSONRPCResponse<S>>
  // 单向事件模式
  public async raw<R>(payload: JSONRPCEvent<R>): Promise<void>
  // 实现
  public async raw<R, P, S>(
    payload: JSONRPCRequest<R> | JSONRPCEvent<R>,
    cb?: (params: P) => void,
  ): Promise<JSONRPCResponse<S> | void> {
    return new Promise<JSONRPCResponse<S> | undefined>((resolve, reject) => {
      this.bridge.setUpBridge(bridge => {
        const callback =
          'id' in payload
            ? (data: string | object) => {
                // 回调
                try {
                  if (data) {
                    let res: JSONRPCResponse<S>
                    if (typeof data === 'string') {
                      res = JSON.parse(data)
                    } else {
                      res = data as JSONRPCResponse<S>
                    }

                    if (
                      !('id' in res) ||
                      res.id !== (payload as JSONRPCRequest<R>).id
                    ) {
                      reject(new RPCError(PROTOCOL_ERROR, '协议错误：id为空或不匹配'))
                      return
                    }
                    resolve(res)
                  } else {
                    reject(new RPCError(PROTOCOL_ERROR, '协议错误：响应为空'))
                  }
                } catch (err) {
                  // parse error
                  reject(
                    new RPCError(
                      PROTOCOL_ERROR,
                      `协议错误: JSON解析失败(${err.message})`,
                    ),
                  )
                }
              }
            : typeof cb === 'function' ? cb : undefined

        bridge.callHandler(METHOD_NAME, payload, callback)
        if (callback == null) {
          // 单向事件模式
          resolve()
        }
      })
    })
  }

  /**
   * 请求
   */
  public async request<P, R>(method: string, params?: P): Promise<R> {
    const id = `${Date.now()}${this.uid++}`
    const payload = {
      jsonrpc: '2.0',
      id,
      method,
      params,
    }
    const res = await this.raw<P, R>(payload as JSONRPCRequest<P>)
    if (this.isError(res)) {
      throw new RPCError(res.error.code, res.error.message, res.error)
    }
    return res.result
  }

  /**
   * 断言
   */
  public isError<T>(res: JSONRPCResponse<T>): res is JSONRPCResponseError {
    return 'error' in res
  }

  /**
   * 注册事件
   */
  public addListener<R, P>(
    method: string,
    callback: (params: P) => void,
    params?: R,
  ) {
    const payload = {
      jsonrpc: '2.0',
      method,
      params,
    }
    this.raw(payload as JSONRPCEvent<R>, callback)
  }

  /**
   * 触发事件
   */
  public emit<P>(method: string, params?: P) {
    const payload = {
      jsonrpc: '2.0',
      method,
      params,
    }
    this.raw(payload as JSONRPCEvent<P>)
  }

  /**
   * 提供方法给原生调用
   * @param methods 
   */
  public registerHandler<P, R>(
    method: string,
    handler: (params: P) => Promise<R>,
  ) {
    if (
      this.handlers[method] &&
      this.handlers[method].callback &&
      this.handlers[method].callback.length
    ) {
      throw new Error(`[gzb-jssdk]: ${method} 方法已存在处理器`)
    }
    this.handlers[method] = { callback: [handler] }

    return () => this.removeHandler(method, handler)
  }

  /**
   * 监听原生客户端的事件调用
   * @param method 
   * @param handler 
   */
  public registerEventHandler<P>(method: string, handler: (params: P) => void) {
    if (this.handlers[method] && this.handlers[method].callback) {
      this.handlers[method].callback.push(handler)
    } else {
      this.handlers[method] = { callback: [handler] }
    }

    return () => this.removeHandler(method, handler)
  }

  /**
   * 移除原生客户端调用处理器
   * @param method 
   * @param handler 
   */
  public removeHandler(method: string, handler: (params: any) => any) {
    if (this.handlers[method] && this.handlers[method].callback) {
      const idx = this.handlers[method].callback.indexOf(handler)
      if (idx !== -1) {
        this.handlers[method].callback.splice(idx, 1)
      }
    }
  }

  private constructor() {
    if (!Device.windows()) {
      this.bridge = MobileBridge.getInstance()
    } else {
      this.bridge = {
        setUpBridge(callback: (bridge: Bridge) => void) {
          callback(DesktopBridge.getNormalizedBridge())
        },
      }
      DesktopBridge.getInstance().registerHandler(METHOD_NAME)
    }

    // 侦听客户端调用
    this.setupClientHandlers()
  }

  private _callHandler = async (
    request: JSONRPCRequest<any>,
    callback: (data: any) => void,
  ) => {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.JM_DEBUG === 'true'
    ) {
      // tslint:disable-next-line:no-console
      console.log(`[gzb-jssdk] 客户端调用 ${METHOD_NAME}:`, request)
    }

    const { id, params, method } = request
    const isEvent = id == null

    const handler = this.handlers[method]
    const resolve = (data: any) => {
      const res: JSONRPCResponseSuccess<any> = {
        jsonrpc: '2.0',
        id,
        result: data,
      }
      callback!(res)
    }

    const reject = (code: number, message: string, data?: any) => {
      const res: JSONRPCResponseError = {
        jsonrpc: '2.0',
        id,
        error: {
          code,
          message,
          data,
        },
      }
      callback!(res)
    }

    if (!isEvent && handler.callback.length !== 1) {
      console.warn(`[gzb-jssdk]: 未注册${method}供客户端调用`)
      reject(JSONRPCErrorCode.NotFound, '接口未注册')
      return
    }

    if (isEvent) {
      handler.callback.forEach(i => {
        i(params)
      })
    } else {
      try {
        const res = await handler.callback[0](params)
        resolve(res)
      } catch (err) {
        if (err instanceof RPCHandlerError) {
          reject(err.code, err.message, err.data)
        } else {
          reject(JSONRPCErrorCode.ClientError, err.message)
        }
      }
    }
  }

  private setupClientHandlers() {
    this.bridge.setUpBridge(bridge => {
      bridge.registerHandler(METHOD_NAME, this._callHandler)
    })
  }
}

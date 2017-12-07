/**
 * Mobile Bridge
 * @module
 */ /** */
/* tslint:disable: no-any */
import Bridge from './Bridge'
import Device from '../DeviceDetector'
import { debug, noop } from '../utils'

export default class MobileBridge {
  private static instance: MobileBridge
  private androidBridgeInitialized: boolean = false
  public static getInstance() {
    if (!this.instance) {
      return (this.instance = new MobileBridge())
    }
    return this.instance
  }
  // 表示是否调用了android的WebViewJavascriptBridge.init() 方法
  /**
   * ## 初始化桥接
   * IOS 端基于[`marcuswestin/WebViewJavascriptBridge`](https://github.com/marcuswestin/WebViewJavascriptBridge#usage)
   * Android 端基于[`lzyzsd/JsBridge`](https://github.com/lzyzsd/JsBridge)
   * 
   * @param callback 提供一个回调用户获取桥接对象
   * @example
   * <br/>
   * ```typescript
   * this.setUpBridge((bridge) => {
   *   bridge.callHandler('type', 'payload', (response) => {...})
   * })
   * ```
   */
  public setUpBridge(callback: (bridge: Bridge) => void): void {
    let _callback = callback

    // 猴补丁， 用于输出debug信息
    _callback = (bridge: Bridge) => {
      const _bridge = { ...bridge }
      const orgCallHandler = bridge.callHandler

      _bridge.callHandler = (
        type: string,
        payload: any,
        responseCallback?: (data: any) => void,
      ) => {
        if (process.env.NODE_ENV === 'development') {
          debug(`[Mobile Bridge]: << 调用 Handler ${type}\n -- payload`, payload)
        }
        const _responseCallback = (data: any) => {
          if (process.env.NODE_ENV === 'development') {
            debug(`[Mobile Bridge]: >> Handler 响应 ${type} \n -- payload`, data)
          }
          if (data && typeof data === 'string') {
            data = JSON.parse(data)
          }
          if (typeof responseCallback === 'function') {
            responseCallback(data)
          }
        }
        return orgCallHandler(type, payload, _responseCallback)
      }

      callback(_bridge)
    }

    // WebViewJavascriptBridge#usage 6.0 Javascript 有改动
    if (window.WebViewJavascriptBridge) {
      // 初始化完毕
      // 兼容新版本 WebViewJavascriptBridge ，增加回 init 方法
      if (typeof window.WebViewJavascriptBridge.init === 'undefined') {
        window.WebViewJavascriptBridge.init = noop
      }

      // 确保android调用init方法
      if (!this.androidBridgeInitialized && Device.android()) {
        window.WebViewJavascriptBridge.init()
        this.androidBridgeInitialized = true
      }

      _callback(window.WebViewJavascriptBridge)
    } else if (window.WVJBCallbacks) {
      // 正在初始化中
      window.WVJBCallbacks.push(_callback)
    } else {
      // 进行初始化
      window.WVJBCallbacks = [_callback]
      if (!Device.android()) {
        // IOS
        const WVJBIframe = document.createElement('iframe')
        WVJBIframe.style.display = 'none'
        WVJBIframe.src = 'https://__bridge_loaded__'
        document.documentElement.appendChild(WVJBIframe)
        setTimeout(() => {
          document.documentElement.removeChild(WVJBIframe)
        }, 0)
      } else {
        // Android
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          () => {
            // 修复android端无法调用回调的问题
            if (typeof window.WebViewJavascriptBridge.init === 'function') {
              window.WebViewJavascriptBridge.init()
              this.androidBridgeInitialized = true
            }
            const callbacks = window.WVJBCallbacks
            delete window.WVJBCallbacks
            callbacks.forEach(cb => {
              cb(window.WebViewJavascriptBridge)
            })
          },
          false,
        )
      }
    }
  }

  private constructor() {}
}

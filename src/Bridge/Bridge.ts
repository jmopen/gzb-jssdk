/**
 * Javascript 端桥接接口
 */
/* tslint:disable: no-any no-namespace */
export default interface Bridge {
  // 兼容旧版
  init: () => void
  callHandler(
    type: string,
    payload: any,
    responseCallback?: (data: any) => void,
  ): void
  registerHandler(
    type: string,
    callback: (data: any, responseCallback?: (data: any) => void) => void,
  ): void
}

export type BridgeCallback = (bridge: Bridge) => void

/**
 * 扩展的window接口
 */
declare global {
  interface Window {
    WebViewJavascriptBridge: Bridge
    WVJBCallbacks: BridgeCallback[]
  }
}

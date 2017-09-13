/**
 * 桥接返回失败时抛出的错误
 */
export default class BridgeResponseError extends Error {
  public errCode: number
  constructor(errCode: number, errMsg: string) {
    super(errMsg)
    this.errCode = errCode
    // support error instanceof BridgeResponseError
    Object.setPrototypeOf(this, BridgeResponseError.prototype)
  }
}

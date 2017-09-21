/**
 * Desktop end concrete implements
 * @module
 */ /** */
import Api from './Api'
import { upperFirst } from './utils'
import { Bridge, DesktopBridge } from './Bridge'
import * as Handlers from './handlers'
import * as Events from './events'

export default class DesktopApi extends Api {
  private static instance: Api
  private bridge: Bridge
  public static getInstance(): Api {
    if (this.instance == null) {
      return (this.instance = new DesktopApi())
    }
    return this.instance
  }

  public setUpBridge(callback: (bridge: Bridge) => void): void {
    callback(this.bridge)
  }

  protected setupEventWatcher(eventName: string, callback: () => void) {
    switch (eventName) {
      case Events.beforeunload:
        this.setUpBeforeUnloadWatcher(callback)
        break
      case Events.beforegoback:
        this.setUpBeforeGoBackWatcher(callback)
        break
      default:
        throw new Error(`未知事件: ${eventName}`)
    }
  }

  protected teardownEventWatcher(eventName: string) {
    switch (eventName) {
      case Events.beforeunload:
        this._teardownBeforeUnloadWatcher()
        break
      case Events.beforegoback:
        this._teardownBeforeGoBackWatcher()
        break
      default:
        throw new Error(`未知事件: ${eventName}`)
    }
  }

  private setUpBeforeUnloadWatcher(callback: () => void) {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.WINDOW_CLOSE, null, () => {
        callback()
        // 重新监听
        this.setUpBeforeUnloadWatcher(callback)
      })
    })
  }

  private _teardownBeforeUnloadWatcher() {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.WINDOW_CLOSE, null)
    })
  }

  private setUpBeforeGoBackWatcher(callback: () => void) {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.PAGE_GO_BACK, null, () => {
        callback()
        // 重新监听
        this.setUpBeforeGoBackWatcher(callback)
      })
    })
  }

  private _teardownBeforeGoBackWatcher() {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.PAGE_GO_BACK, null)
    })
  }

  private initializeBridge() {
    this.bridge = DesktopBridge.getNormalizedBridge()
    const bridge = DesktopBridge.getInstance()
    bridge
      .registerHandler<{ title: string }>(Handlers.SET_WEB_TITLE, {
        beforeSend: ({ title }) => title,
      })
      .registerHandler(Handlers.CHOOSE_IMG)
      .registerHandler<{ callNumber: string }>(Handlers.MAKE_CALL_TO_NUMBER, {
        beforeSend: ({ callNumber }) => callNumber,
      })
      .registerHandler<{ email: string }>(Handlers.OPEN_MAIL, {
        beforeSend: ({ email }) => email,
      })
      .deprecatedRegisterHandler(Handlers.OPEN_URL, data => {
        window.HandleEvent(
          `On${upperFirst(Handlers.OPEN_URL)}`,
          data.url,
          JSON.stringify(data),
        )
      })
      .registerHandler<{ id: string }>(Handlers.OPEN_CONTACT_ITEM, {
        beforeSend: ({ id }) => id,
      })
      .registerHandler(Handlers.SET_BAR_VISIBLE_PC)
      .registerHandler(Handlers.EXIT, { preserveName: true })
      .registerHandler(Handlers.API_INFOS, { bridgeHandleName: 'OnGetApiList' })
      .registerHandler(Handlers.OPEN_DIALOG)
      .registerHandler(Handlers.OPEN_CONTACT)
      .registerHandler(Handlers.SELECT_SESSION)
      .registerHandler(Handlers.GET_LANGUAGE)
      .registerHandler(Handlers.WINDOW_CLOSE)
      .registerHandler(Handlers.PAGE_GO_BACK)
      // 1.1
      .registerHandler(Handlers.PREVIEW_IMG)
      .registerHandler(Handlers.OPEN_FILE)
  }

  /**
   * 初始化桥接
   */
  private constructor() {
    super()
    this.initializeBridge()
  }
}

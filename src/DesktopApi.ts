/**
 * Desktop end concrete implements
 * @module
 */ /** */
import Api from './Api'
import { upperFirst } from './utils'
import { Bridge, DesktopBridge } from './Bridge'
import * as Handlers from './handlers'
import * as Events from './events'

interface EventDesc {
  callback: () => void
  count: number
  nativeEventName: string
  eventName: string
}

export default class DesktopApi extends Api {
  private static instance: Api
  private bridge: Bridge
  private eventDesc: {
    [eventName: string]: EventDesc
  } = {}

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
        this.prepareEventWatcher(eventName, callback, Handlers.WINDOW_CLOSE)
        break
      case Events.beforegoback:
        this.prepareEventWatcher(eventName, callback, Handlers.PAGE_GO_BACK)
        break
      default:
        throw new Error(`未知事件: ${eventName}`)
    }
  }

  protected teardownEventWatcher(eventName: string) {
    switch (eventName) {
      case Events.beforeunload:
      case Events.beforegoback:
        this.tearDownHandler(this.eventDesc[eventName].nativeEventName)
        delete this.eventDesc[eventName]
        break
      default:
        throw new Error(`未知事件: ${eventName}`)
    }
  }

  private prepareEventWatcher = (
    eventName: string,
    callback: () => void,
    nativeEventName: string,
  ) => {
    const desc = (this.eventDesc[eventName] = {
      count: 0,
      callback,
      nativeEventName,
      eventName,
    })
    // 监听“添加事件”事件， 惰性添加事件处理器
    this.innerAddEventListener('__addListener__', ({ eventType }) => {
      if (eventType === eventName) {
        if (desc.count === 0) {
          // 添加处理器
          this.setUpHandler(desc.nativeEventName, desc.callback)
        }
        desc.count++
      }
    })

    this.innerAddEventListener('__removeListener__', ({ eventType, count }) => {
      if (eventType === eventName) {
        desc.count -= count
        if (desc.count === 0) {
          // 释放
          this.tearDownHandler(desc.nativeEventName)
        }
      }
    })
  }

  private setUpHandler = (nativeEventName: string, callback: () => void) => {
    this.setUpBridge(bridge => {
      bridge.callHandler(nativeEventName, null, () => {
        callback()
        // 重新监听
        this.setUpHandler(nativeEventName, callback)
      })
    })
  }

  private tearDownHandler = (nativeEventName: string) => {
    this.setUpBridge(bridge => {
      bridge.callHandler(nativeEventName, null)
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
      .registerHandler(Handlers.ADD_MENU_ITEM)
      .registerHandler(Handlers.REMOVE_MENU_ITEM)
      .registerHandler(Handlers.SET_NATIVE_MENU_ITEM)
      .registerHandler(Handlers.GET_ENV)
      .registerHandler(Handlers.OPEN_VIDEO)
  }

  /**
   * 初始化桥接
   */
  private constructor() {
    super()
    this.initializeBridge()
  }
}

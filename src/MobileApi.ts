/**
 * 移动端API具体实现
 * @module
 */ /** */
/* tslint:disable: no-any */
import Api from './Api'
import * as Events from './events'
import * as Handlers from './handlers'
import { Bridge, MobileBridge } from './Bridge'
import { SetBarParams } from './protocol'

const DEFAULT_SET_BAR_OPTIONS: SetBarParams = {
  hideMoreBtn: false,
  left: ['goback', 'close'],
  onlyCallBack: [],
  gobackUrl: '',
  right: '',
}

export default class MobileApi extends Api {
  private static instance: Api
  private mobileBridge: MobileBridge
  private closeCallback: () => void
  private gobackCallback: () => void
  private listenerCount: {
    beforegoback: number
    beforeunload: number
  } = {
    beforegoback: 0,
    beforeunload: 0,
  }
  // 因为setBar 是全局性的，只能有一个回调， 然后这个接口没有设计好， 混合了多个职责，
  // 所以出此下策
  private setBarOptions: SetBarParams = {
    ...DEFAULT_SET_BAR_OPTIONS,
    left: ['goback', 'close'],
    onlyCallBack: [],
  }
  public static getInstance(): Api {
    if (this.instance == null) {
      return (this.instance = new MobileApi())
    }
    return this.instance
  }

  public getBackButtonVisible() {
    return this.setBarOptions.left.indexOf('goback') !== -1
  }

  public getCloseButtonVisible() {
    return this.setBarOptions.left.indexOf('close') !== -1
  }

  public getMoreButtonVisible() {
    return !this.setBarOptions.hideMoreBtn
  }

  /**
   * 设置'更多'的可见性
   */
  public setMoreButtonVisible(visible: boolean = true) {
    this.setBarOptions.hideMoreBtn = !visible
    this.setupBarWatcher()
  }

  /**
   * 设置返回按钮的可见性
   * > 关闭按钮和返回按钮只能隐藏一个
   */
  public setBackButtonVisible(visible: boolean = true) {
    this.setBarButtonVisible(visible, 'goback')
  }

  /**
   * 设置关闭按钮的可见性
   * > 关闭按钮和返回按钮只能隐藏一个
   */
  public setCloseButtonVisible(visible: boolean = true) {
    this.setBarButtonVisible(visible, 'close')
  }

  protected setupEventWatcher(eventName: string, callback: () => void) {
    switch (eventName) {
      case Events.beforeunload:
        this.setUpBeforeUnloadWatcher(callback)
        break
      case Events.beforegoback:
        this.setUpGobackWatcher(callback)
        break
      default:
        throw new Error(`未知事件: ${eventName}`)
    }
  }

  protected teardownEventWatcher(eventName: string) {
    switch (eventName) {
      case Events.beforeunload:
      case Events.beforegoback:
        this._teardownBeforeUnloadWatcher()
        break
      default:
        throw new Error(`未知事件: ${eventName}`)
    }
  }

  public setUpBridge(callback: (bridge: Bridge) => void): void {
    this.mobileBridge.setUpBridge(callback)
  }

  private setBarButtonVisible(visible: boolean, name: string) {
    const index = this.setBarOptions.left.indexOf(name)
    if (visible && index === -1) {
      this.setBarOptions.left.push(name)
      this.setupBarWatcher()
    } else if (!visible && index !== -1) {
      this.setBarOptions.left.splice(index, 1)
      this.setupBarWatcher()
    }
  }

  private checkBarWatcher(name: 'goback' | 'close', eventName: string) {
    if (
      this.listenerCount[eventName] &&
      this.setBarOptions.left.indexOf(name) !== -1
    ) {
      // 添加监听
      if (this.setBarOptions.onlyCallBack.indexOf(name) === -1) {
        this.setBarOptions.onlyCallBack.push(name)
      }
    } else {
      // 移除
      const index = this.setBarOptions.onlyCallBack.indexOf(name)
      if (index !== -1) {
        this.setBarOptions.onlyCallBack.splice(index, 1)
      }
    }
  }

  private setupBarWatcher() {
    this.checkBarWatcher('goback', Events.beforegoback)
    this.checkBarWatcher('close', Events.beforeunload)

    this.setUpBridge(bridge => {
      bridge.callHandler(
        Handlers.SET_BAR,
        {
          ...this.setBarOptions,
          hideMoreBtn: this.setBarOptions.hideMoreBtn.toString(),
        },
        res => {
          // 重新注册
          setTimeout(() => {
            this.setupBarWatcher()
          }, 0)

          if (res.result !== 'true') {
            return
          }

          const cb =
            res.buttonId === 'close'
              ? this.closeCallback
              : res.buttonId === 'goback' ? this.gobackCallback : null
          if (cb) {
            cb()
          }
        },
      )
    })
  }

  /*
   * 切换到其他页面， 解除捕获
   * 这是工作宝移动端的一个bug
   * FIXME: 移动端返回和关闭按钮切换到其他页面后点击无响应
   */
  private _teardownBeforeUnloadWatcher() {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.SET_BAR, {
        ...DEFAULT_SET_BAR_OPTIONS,
        hideMoreBtn: 'false',
      })
    })
  }

  // 监听观察者数量
  private watchListener(eventName: string) {
    this.innerAddEventListener('__addListener__', ({ eventType }) => {
      if (eventType === Events[eventName]) {
        this.listenerCount[eventName]++
        this.setupBarWatcher()
      }
    })
    this.innerAddEventListener('__removeListener__', ({ eventType, count }) => {
      if (eventType === Events[eventName]) {
        this.listenerCount[eventName] -= count
        this.setupBarWatcher()
      }
    })
    const len = (this.listenerCount[eventName] = this.getListenerLength(
      eventName,
    ))
    if (len) {
      setTimeout(() => {
        this.setupBarWatcher()
      })
    }
  }

  private setUpBeforeUnloadWatcher(callback: () => void) {
    this.closeCallback = callback
    this.watchListener(Events.beforeunload)
  }

  private setUpGobackWatcher(callback: () => void) {
    this.gobackCallback = callback
    this.watchListener(Events.beforegoback)
  }

  private constructor() {
    super()
    this.mobileBridge = MobileBridge.getInstance()
  }
}

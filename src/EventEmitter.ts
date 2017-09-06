/**
 * Event Emitter
 * @module
 */ /** */
// TODO: 执行回调的过程中可以移除监听
// TODO: once
// tslint:disable:no-any
import { findIndex, debug } from './utils'
export type Callback = (data: any) => any
interface ListenerInner {
  callback: Callback
  context: any
}

export interface EventInit {
  cancelable: boolean
}

/**
 * 自定义事件对象构造器
 */
export class CustomEvent {
  /**
   * 事件类型
   */
  public readonly type: string
  /**
   * 事件是否可以取消， 即可以通过eventPreventDefault()取消默认行为
   */
  public readonly cancelable: boolean = false
  /**
   * 事件产生时的时间戳
   */
  public readonly timeStamp: number = Date.now()
  public returnValue: any
  /**
   * 标志时间是否被取消
   */
  private eventPrevented: boolean = false
  public get defaultPrevented() {
    return this.eventPrevented
  }
  public constructor(type: string, eventInit?: Partial<EventInit>) {
    this.type = type
    if (eventInit) {
      this.cancelable = eventInit.cancelable || false
    }
  }
  /**
   * 取消默认行为
   */
  public preventDefault() {
    if (this.cancelable) {
      this.eventPrevented = true
    }
  }
}

export type Disposer = () => void

export default class EventEmitter {
  private listeners: { [eventType: string]: ListenerInner[] } = {}
  public addListener(
    eventType: string,
    callback: Callback,
    context?: any,
  ): Disposer {
    const listeners = this.listeners[eventType] || []
    const listener = {
      callback,
      context,
    }
    if (process.env.NODE_ENV === 'development') {
      debug(`[EventEmitter]: addListener ${eventType}`)
    }
    this.listeners[eventType] = listeners.concat(listener)
    return () => {
      this.removeListener(eventType, callback)
    }
  }

  public getListenerLength(eventType: string) {
    return this.listeners[eventType] ? this.listeners[eventType].length : 0
  }

  public removeAllListener(eventType: string) {
    if (process.env.NODE_ENV === 'development') {
      debug(`[EventEmitter]: removeAllListener ${eventType}`)
    }
    const length = (this.listeners[eventType] || []).length
    delete this.listeners[eventType]
    return length
  }

  public removeListener(eventType: string, callback: Callback, context?: any) {
    if (process.env.NODE_ENV === 'development') {
      debug(`[EventEmitter]: removeListener ${eventType}`)
    }
    const listeners = this.listeners[eventType]
    if (listeners && listeners.length) {
      const index = findIndex<ListenerInner>(
        listeners,
        ({ callback: cb, context: ctx }) => cb === callback && ctx === context,
      )
      if (index !== -1) {
        listeners.splice(index, 1)
        return true
      }
    }
    return false
  }

  // 这是同步的
  public emit(eventType: string, data?: any) {
    if (process.env.NODE_ENV === 'development') {
      debug(`[EventEmitter]: emit ${eventType}\n ---payload: `, data)
    }
    const listeners = this.listeners[eventType]
    const results = []
    if (listeners && listeners.length) {
      let rushThrough = false
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < listeners.length; i++) {
        if (rushThrough) {
          results.push(undefined)
          continue
        }
        const { callback: cb, context } = listeners[i]
        const rtn = cb.call(context, data)
        // 如果其中一个回调返回false，将停止后面回调的执行
        if (rtn === false) {
          rushThrough = true
        }
        results.push(rtn)
      }
    }
    if (process.env.NODE_ENV === 'development') {
      debug(`[EventEmitter]: callback results ${eventType}\n : `, results)
    }
    return results
  }
}

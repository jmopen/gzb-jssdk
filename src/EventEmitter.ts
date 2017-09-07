/**
 * Event Emitter
 * @module
 */ /** */
// tslint:disable:no-any
import { findIndex, debug } from './utils'
export type Callback = (data: any) => any
interface ListenerInner {
  callback: Callback
  context: any
  once: boolean
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

/**
 * 事件订阅器和发送器
 * @example
 * <br/>
 * ```typescript
 * import { EventEmitter } from 'gzb-jssdk'
 * 
 * const emitter = new EventEmitter()
 * emitter.addListener('foo', data => {
 *   console.log('foo event emitted', data)
 * })
 * 
 * emitter.emit('foo', 'bar')
 * // => foo event emitted bar
 * ```
 * 
 */
export default class EventEmitter {
  private listeners: { [eventType: string]: ListenerInner[] } = {}

  /**
   * 添加订阅者
   * @param eventType 事件名
   * @param callback 回调, 回调中可以返回false将会阻止后续订阅者被执行
   * @param context 可选，回调执行的上下文
   * @return 返回一个函数，可以用于移除事件订阅
   */
  public addListener(
    eventType: string,
    callback: Callback,
    context?: any,
    once: boolean = false,
  ): Disposer {
    const listeners = this.listeners[eventType] || []
    const listener = {
      callback,
      context,
      once,
    }
    if (process.env.NODE_ENV === 'development') {
      debug(`[EventEmitter]: addListener ${eventType}`)
    }
    this.listeners[eventType] = listeners.concat(listener)
    return () => {
      return this.removeListener(eventType, callback)
    }
  }

  /**
   * 只订阅一次事件, 事件发生后将被移除
   * @param eventType 事件名
   * @param callback 回调, 回调中可以返回false将会阻止后续订阅者被执行
   * @param context 可选，回调执行的上下文
   * @return 返回一个函数，可以用于移除事件订阅
   */
  public once(eventType: string, callback: Callback, context?: any): Disposer {
    return this.addListener(eventType, callback, context, true)
  }

  public getListenerLength(eventType: string) {
    return this.listeners[eventType] ? this.listeners[eventType].length : 0
  }

  /**
   * 移除指定事件所有订阅者
   * @param {string} eventType 
   * @returns 返回被移除的订阅者数量
   */
  public removeAllListener(eventType: string) {
    if (process.env.NODE_ENV === 'development') {
      debug(`[EventEmitter]: removeAllListener ${eventType}`)
    }
    const length = (this.listeners[eventType] || []).length
    delete this.listeners[eventType]
    return length
  }

  /**
   * 移除订阅者
   * @param  eventType 
   * @param  callback 
   * @param context
   * @return 返回boolean值，表示是否从队列中被删除
   */
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

  /**
   * 触发事件
   * > 注意：所有回调都是被同步调用的
   * @param eventType 事件类型
   * @param data 自定义数据
   * @returns 返回一个数组，表示所有订阅者回调中返回的值
   */
  public emit(eventType: string, data?: any) {
    if (process.env.NODE_ENV === 'development') {
      debug(`[EventEmitter]: emit ${eventType}\n ---payload: `, data)
    }
    const listeners = this.listeners[eventType]
    const results = []
    if (listeners && listeners.length) {
      // copy
      const _listeners = [...listeners]
      let rushThrough = false
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < _listeners.length; i++) {
        const { callback: cb, context, once } = _listeners[i]
        if (once) {
          this.removeListener(eventType, cb, context)
        }
        if (rushThrough) {
          results.push(undefined)
          continue
        }
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

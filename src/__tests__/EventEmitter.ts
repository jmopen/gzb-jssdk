/**
 * test EventEmitter
 */
import EventEmitter from '../EventEmitter'

describe('test addListener', () => {
  let emitter: EventEmitter
  const eventName = 'test'
  beforeEach(() => {
    emitter = new EventEmitter()
  })

  test('getListenerLength equal added listener count', () => {
    const cb1 = () => {}
    const cb2 = () => {}
    emitter.addListener(eventName, cb1)
    emitter.addListener(eventName, cb2)
    expect(emitter.getListenerLength(eventName)).toBe(2)

    const removed = emitter.removeListener(eventName, cb1)
    expect(removed).toBeTruthy()
    expect(emitter.getListenerLength(eventName)).toBe(1)
  })

  test('removeAllListener', () => {
    emitter.addListener(eventName, () => {})
    emitter.addListener(eventName, () => {})
    expect(emitter.getListenerLength(eventName)).toBe(2)

    const length = emitter.removeAllListener(eventName)
    expect(length).toBe(2)
    expect(emitter.getListenerLength(eventName)).toBe(0)
  })

  test('removeListener with context', () => {
    const ctx = { cb: () => {} }
    emitter.addListener(eventName, () => {})
    emitter.addListener(eventName, ctx.cb, ctx)

    expect(emitter.getListenerLength(eventName)).toBe(2)
    emitter.removeListener(eventName, ctx.cb, null)
    expect(emitter.getListenerLength(eventName)).toBe(2)
    emitter.removeListener(eventName, ctx.cb, ctx)
    expect(emitter.getListenerLength(eventName)).toBe(1)
  })
})

/**
 * test EventEmitter
 */
import EventEmitter from '../EventEmitter'

const eventName = 'test1'
const eventName2 = 'test2'

describe('test addListener', () => {
  let emitter: EventEmitter
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

  test('use disposer to remove event listener', () => {
    const dispose1 = emitter.addListener(eventName, () => {})
    const dispose2 = emitter.addListener(eventName, () => {})

    expect(emitter.getListenerLength(eventName)).toBe(2)
    dispose1()
    expect(emitter.getListenerLength(eventName)).toBe(1)
    dispose2()
    expect(emitter.getListenerLength(eventName)).toBe(0)
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

describe('test event emit', () => {
  let emitter
  beforeEach(() => {
    emitter = new EventEmitter()
  })

  test('addListener', () => {
    const mcb1 = jest.fn()
    const mcb2 = jest.fn()
    const mcb3 = jest.fn()
    const dispose1 = emitter.addListener(eventName, mcb1)
    const dispose2 = emitter.addListener(eventName2, mcb2)
    emitter.emit(eventName, 'foo')
    expect(mcb1).toBeCalledWith('foo')
    expect(mcb2).not.toBeCalled()
    mcb1.mockClear()

    emitter.emit(eventName2, 'bar')
    expect(mcb1).not.toBeCalled()
    expect(mcb2).toHaveBeenCalledWith('bar')

    dispose1()
    emitter.emit(eventName, 'foo')
    expect(mcb1).not.toBeCalled()

    mcb2.mockClear()
    emitter.addListener(eventName2, mcb3)
    dispose2()
    emitter.emit(eventName2, 'foo')
    expect(mcb2).not.toBeCalled()
    expect(mcb3).toBeCalledWith('foo')
  })

  test('once', () => {
    const mcb1 = jest.fn()
    const mcb2 = jest.fn()
    emitter.once(eventName, mcb1)
    emitter.addListener(eventName, mcb2)

    emitter.emit(eventName, 'foo')
    expect(mcb1).toBeCalledWith('foo')
    expect(mcb2).toBeCalledWith('foo')
    expect(emitter.getListenerLength(eventName)).toBe(1)

    emitter.emit(eventName, 'bar')
    expect(mcb1).toHaveBeenCalledTimes(1)
    expect(mcb2).toHaveBeenCalledTimes(2)
    expect(mcb1).not.toBeCalledWith('bar')
    expect(mcb2).toBeCalledWith('bar')
  })

  test('return false to prevent default and stop call following callbacks', () => {
    const mcb1 = jest.fn().mockReturnValue('bar')
    const mcb2 = jest.fn().mockReturnValue(false)
    const mcb3 = jest.fn()
    emitter.addListener(eventName, mcb1)
    emitter.addListener(eventName, mcb2)
    emitter.addListener(eventName, mcb3)

    const ret = emitter.emit(eventName, 'foo')
    expect(mcb1).toBeCalledWith('foo')
    expect(mcb2).toBeCalledWith('foo')
    expect(mcb3).not.toBeCalled()

    expect(ret).toEqual(['bar', false, undefined])
  })

  test('addListener in event callback', () => {
    const mcb2 = jest.fn()
    const mcb1 = jest.fn(() => {
      emitter.addListener(eventName, mcb2)
    })

    emitter.addListener(eventName, mcb1)
    emitter.emit(eventName, 'foo')

    expect(mcb1).toBeCalledWith('foo')
    expect(mcb2).not.toBeCalled()
  })

  test('removeListener in event Callback', () => {
    const mcb2 = jest.fn()
    const mcb1 = jest.fn(() => {
      emitter.removeListener(eventName, mcb2)
    })

    emitter.addListener(eventName, mcb1)
    emitter.addListener(eventName, mcb2)
    emitter.emit(eventName, 'foo')

    expect(mcb1).toBeCalledWith('foo')
    expect(mcb2).toBeCalledWith('foo')

    emitter.emit(eventName, 'bar')
    expect(mcb1).toHaveBeenCalledTimes(2)
    expect(mcb1).toBeCalledWith('bar')
    expect(mcb2).toHaveBeenCalledTimes(1)
  })
})

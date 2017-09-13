/**
 * test BridgeReposeError
 */
import BridgeResponseError from '../BridgeResponseError'

describe('test BrideResponseError', () => {
  test('instanceof', () => {
    const error = new BridgeResponseError(123, 'message')
    expect(error instanceof BridgeResponseError).toBeTruthy()
    expect(error instanceof Error).toBeTruthy()
    expect(error instanceof SyntaxError).toBeFalsy()
  })
})

/**
 * test utils
 */
import * as utils from '../utils'

describe('test utils', () => {
  test('upperFirst', () => {
    const { upperFirst } = utils
    expect(upperFirst('abc')).toBe('Abc')
    expect(upperFirst('Abc')).toBe('Abc')
    expect(upperFirst('_Abc')).toBe('_Abc')
    expect(upperFirst('')).toBe('')
    expect(upperFirst('a')).toBe('A')
  })

  const { dateFormat } = utils
  const dateInString = '2012-02-02 14:02:02'
  const date = new Date(dateInString)
  const dateInMs = date.getTime()
  const dateInS = dateInMs / 1000
  test('dateFormat format string', () => {
    expect(dateFormat(date, 'YYYY')).toBe('2012')
    expect(dateFormat(date, 'MM')).toBe('02')
    expect(dateFormat(date, 'M')).toBe('2')
    expect(dateFormat(date, 'DD')).toBe('02')
    expect(dateFormat(date, 'D')).toBe('2')
    expect(dateFormat(date, 'HH')).toBe('14')
    expect(dateFormat(date, 'H')).toBe('14')
    expect(dateFormat(date, 'hh')).toBe('02')
    expect(dateFormat(date, 'h')).toBe('2')
    expect(dateFormat(date, 'm')).toBe('2')
    expect(dateFormat(date, 'mm')).toBe('02')
    expect(dateFormat(date, 's')).toBe('2')
    expect(dateFormat(date, 'ss')).toBe('02')
    expect(dateFormat(date, 'YYYY/MM/D hh:mm')).toBe('2012/02/2 02:02')
  })

  const format = 'YYYY/MM/D hh:mm'
  const result = '2012/02/2 02:02'
  test('dateFormat input in date', () => {
    expect(dateFormat(date, format)).toBe(result)
  })

  test('dateFormat input in string', () => {
    expect(dateFormat(dateInString, format)).toBe(result)
  })

  test('dateFormat input in ms', () => {
    expect(dateFormat(dateInMs, format)).toBe(result)
  })

  test('dateFormat input in s', () => {
    expect(dateFormat(dateInS, format, true)).toBe(result)
  })
})

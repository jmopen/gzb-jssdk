/**
 * 帮助方法
 * @module
 */ /** */
// tslint:disable:no-any

declare var process: {
  env: {
    'NODE_ENV': 'production' | 'development'
  }
}

/**
 * 转换JSON结构中的大字符串，避免输出到控制台时卡死
 */
export function bigStringTransform(arg: any): any {
  if (arg == null) {
    return arg
  } else if (typeof arg === 'string') {
    if (arg.length > 2000) {
      return arg.substr(0, 2000) + '...'
    }
    return arg
  } else if (Array.isArray(arg)) {
    return arg.map(bigStringTransform)
  } else if (typeof arg === 'object') {
    const _arg = {}
    for (const key in arg) {
      if (arg.hasOwnProperty(key)) {
        _arg[key] = bigStringTransform(arg[key])
      }
    }
    return _arg
  }
  return arg
}

/**
 * 代替console.log, 这个函数只有在`process.env.NODE_ENV`为`true`时输出到终端
 */
export function debug(...args: any[]) {
  if (process.env.NODE_ENV === 'development') {
    const _args = args.map(bigStringTransform)
    console.log(..._args) // tslint:disable-line:no-console
  }
}

/**
 * 代替console.warn, 这个函数只有在`process.env.NODE_ENV`为`true`时输出到终端
 */
export function warn(...args: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(...args) // tslint:disable-line:no-console
  }
}

/**
 * 输出deprecated 警告
 */
export function deprecated<R>(
  desc: string,
  wrapped: (...args: any[]) => R,
  context?: object,
): (...args: any[]) => R
export function deprecated(desc: string): void
export function deprecated<R>(
  desc: string,
  wrapped?: (...args: any[]) => R,
  context?: object,
): void | ((...args: any[]) => R) {
  warn(`[GZB JSSDK deprecated]: ${desc}`)
  if (wrapped) {
    return (...args: any[]) => {
      return wrapped.apply(context, args)
    }
  }
}

export function noop() {} // tslint:disable-line:no-empty
export function identity<T>(i: T): T {
  return i
}

export function upperFirst(str: string) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`
}

/**
 * 获取格式化后的日期
 * @param [date=new Date()] 
 * @param [format='YYYY-MM-DD'] 
 * @param [inSecond=true] 
 * @returns 
 */
export function dateFormat(
  date: Date | number | string = new Date(),
  format: string = 'YYYY-MM-DD',
  inSecond: boolean = true,
) {
  let normolizeDate: Date
  if (!(date instanceof Date)) {
    const time = new Date(date as string)

    if (Number.isNaN(time.getTime())) {
      const toNumber = Number.parseInt(date as string)
      if (Number.isNaN(toNumber)) {
        throw new TypeError(`${date} is not a valid Date`)
      } else {
        normolizeDate = inSecond
          ? new Date(toNumber * 1000)
          : new Date(toNumber)
      }
    } else {
      normolizeDate = time
    }
  } else {
    normolizeDate = date
  }

  const year = normolizeDate.getFullYear()
  const month = normolizeDate.getMonth() + 1
  const day = normolizeDate.getDate()
  const hour = normolizeDate.getHours()
  const hour12 = hour <= 12 ? hour : hour - 12
  const minute = normolizeDate.getMinutes()
  const second = normolizeDate.getSeconds()

  const map = {
    YYYY: year,
    MM: ('0' + month).slice(-2),
    M: month,
    DD: ('0' + day).slice(-2),
    D: day,
    H: hour,
    HH: ('0' + hour).slice(-2),
    h: hour12,
    hh: ('0' + hour12).slice(-2),
    m: minute,
    mm: ('0' + minute).slice(-2),
    s: second,
    ss: ('0' + second).slice(-2),
  }

  return format.replace(/Y+|M+|D+|H+|h+|m+|s+/g, str => {
    return map[str]
  })
}

/**
 * 用户判断是否是中国地区，所有地图产品的坐标再中国地区经过转换加密的
 * @export
 * @param latitude 纬度
 * @param longitude 经度
 */
export function outOfChina(latitude: number, longitude: number) {
  if (latitude < 72.004 || longitude > 137.8347) {
    return true
  }
  if (latitude < 0.8293 || longitude > 55.8271) {
    return true
  }
  return false
}

export type Predicate<D> = (item: D, index: number, array: D[]) => boolean

function baseFindIndex<D>(
  array: D[],
  predicate: Predicate<D>,
  fromIndex: number,
  fromRight: boolean,
): number {
  const length = array.length
  let index = fromIndex + (fromRight ? 1 : -1)
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

/**
 * 查找指定item的index, 如果未找到则返回-1
 * @param {D[]} array 数组
 * @param {Predicate<D>} predicate 判断函数
 * @param {number} [fromIndex=0] 起始查找的索引， 可以是负数
 * @returns {number} 
 */
export function findIndex<D>(
  array: D[],
  predicate: Predicate<D>,
  fromIndex: number = 0,
): number {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  let index = 0
  if (fromIndex !== undefined) {
    index =
      fromIndex < 0
        ? Math.max(length + fromIndex, 0)
        : Math.min(fromIndex, length - 1)
  }
  return baseFindIndex(array, predicate, fromIndex, false)
}

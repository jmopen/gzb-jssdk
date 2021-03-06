/**
 * ## API 接口
 * 所有通用的接口都在这里定义，具体类`DesktopApi`和`MobileApi`, 封装了Bridge
 * 之间的差异，即实现具体的`setUpBridge`方法
 * @module
 */ /** */
// tslint:disable:member-ordering no-empty max-file-line-count no-any
import Device from './DeviceDetector'
import { deprecated } from './utils'
import * as Handlers from './handlers'
import * as Events from './events'
import { Bridge, BridgeResponseError } from './Bridge'
import EventEmitter, { CustomEvent } from './EventEmitter'
import {
  BridgeCommonResponse,
  LegacyCallback,
  ChooseImgParams,
  ChooseImgResponseOld,
  ChooseImgResponse,
  GetLocationOptions,
  GetLocationResponse,
  LocationToParams,
  SetBarParams,
  SetBarResponseOld,
  APIInfosResponse,
  APIInfosResponseOld,
  QRCodeResponse,
  DialogType,
  DialogParams,
  SelectContactParams,
  SelectContactResponse,
  SelectSessionParams,
  SelectSessionResponseOld,
  SelectSessionResponse,
  GetLanguageResponseOld,
  PreviewImgParams,
  PreviewImgResponse,
  SetNativeMenuItemParams,
  GeoNavigateParams,
  CoordType,
  SessionType,
} from './protocol'

export type Callback = (payload: any) => any
export type EventType = keyof typeof Events
export type EventCallback = (event: CustomEvent) => any

const defaultSetBarParams: SetBarParams = {
  hideMoreBtn: false,
  left: ['close', 'goback'],
  onlyCallBack: [],
  gobackUrl: '',
  right: '',
}

const defaultGetLocationOptions: GetLocationOptions = {
  enableHighAccuracy: true,
  preferNative: true,
  timeout: Infinity,
  watch: false,
  maximumAge: 0,
}

const defaultChooseImageParams: ChooseImgParams = {
  quality: 100,
  targetType: 'default',
  extType: [],
  maxSizeKb: 0,
}

const defaultSelectSessionParams = { multiple: true }

let uid: number = 0

/**
 * 解析bridge 返回的数据
 */
// tslint:disable-next-line:no-any
function parse(data: any): any {
  if (typeof data === 'string') {
    const res = JSON.parse(data)
    return res
  }
  return data
}

function deprecatedTemplate(cur: string, alias: string) {
  return `'${cur}' 方法已经废弃, 请使用 ${alias} 方法代替.`
}

function deprecatedLegacyCallback(name: string) {
  deprecated(`${name} 方法: 回调形式的API调用已经废弃， 请使用Promise来获取返回值和捕获错误`)
}

export default abstract class Api extends EventEmitter {
  public abstract setUpBridge(callback: (bridge: Bridge) => void): void
  protected abstract setupEventWatcher(
    eventName: string,
    callback: () => void,
  ): void
  protected abstract teardownEventWatcher(eventName: string): void
  private menuItems: { [title: string]: string } = {}

  public isReady: boolean = false

  public addListener(
    eventType: EventType,
    callback: EventCallback,
    context?: any,
  ) {
    setTimeout(() => {
      this.emit('__addListener__', { eventType })
    }, 0)
    return super.addListener(eventType, callback, context)
  }

  public removeListener(
    eventType: EventType,
    callback: EventCallback,
    context?: any,
  ) {
    const removed = super.removeListener(eventType, callback, context)
    if (removed) {
      setTimeout(() => {
        this.emit('__removeListener__', { eventType, count: 1 })
      }, 0)
    }
    return removed
  }

  public removeAllListener(eventType: EventType) {
    const count = super.removeAllListener(eventType)
    if (count) {
      setTimeout(() => {
        this.emit('__removeListener__', { eventType, count })
      }, 0)
    }
    return count
  }

  /**
   * 兼容旧版
   * @deprecated 旧版暴露的公开接口
   */
  public call(cb: (bridge: Bridge) => void) {
    this.setUpBridge(cb)
  }

  /**
   * 设置标题
   * @platform `Windows` | `Android` | `IOS` | `Web`
   */
  public setTitle(title: string): void {
    Device.bridgeAvailable().then(avail => {
      if (avail) {
        this.setUpBridge(bridge => {
          bridge.callHandler(Handlers.SET_WEB_TITLE, { title })
        })
      } else {
        document.title = title
      }
    })
  }

  /**
   * 拨打手机
   * @platform `Windows` | `Android` | `IOS`
   * @param callNumber 手机号码
   */
  public phone(callNumber: string): void {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.MAKE_CALL_TO_NUMBER, { callNumber })
    })
  }

  /**
   * 发送消息
   * @platform `Android` | `IOS`
   * @param callNumber 手机号码
   */
  public sms(callNumber: string): void {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.SEND_SMS_TO_NUMBER, { callNumber })
    })
  }

  /**
   * 发送邮件
   * @platform `Windows` | `Android` | `IOS` | `Web`
   * @param  email 邮箱地址
   */
  public mail(email: string): void {
    Device.bridgeAvailable().then(avail => {
      if (avail) {
        this.setUpBridge(bridge => {
          bridge.callHandler(Handlers.OPEN_MAIL, { email })
        })
      } else {
        const a = document.createElement('a')
        a.href = `mailto:${email}`
        a.click()
      }
    })
  }

  /**
   * 打开指定链接
   * @platform `Windows` | `Android` | `IOS` | `Web`
   * @alias url
   * @param params 请求参数，可以是字符串或对象， showMode 为inner时以应用内webview形式打开
   * 为outer时使用系统浏览器打开, 默认为outer
   */
  public locationTo(params: LocationToParams | string): void {
    Device.bridgeAvailable().then(avail => {
      const payload =
        typeof params === 'string'
          ? { url: params, showMode: 'outer' }
          : { showMode: 'outer', ...params }
      if (avail) {
        this.setUpBridge(bridge => {
          bridge.callHandler(Handlers.OPEN_URL, payload)
        })
      } else {
        if (payload.showMode === 'outer') {
          window.open(payload.url)
        } else {
          location.href = payload.url
        }
      }
    })
  }

  /**
   * 打开指定链接
   * @platform `Windows` | `Android` | `IOS` | `Web`
   * @alias locationTo
   * @deprecated 使用locationTo代替
   */
  public url(params: LocationToParams): void {
    return deprecated(
      deprecatedTemplate('url', 'locationTo'),
      this.locationTo,
      this,
    )(params)
  }

  /**
   * 打开名片
   * @platform `Windows` | `Android` | `IOS`
   * @param id 用户id
   * @alias openContact
   */
  public showContact(id: string) {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.OPEN_CONTACT_ITEM, { id })
    })
  }

  /**
   * 打开名片
   * @platform `Windows` | `Android` | `IOS`
   * @param id 用户id
   * @alias showContact
   */
  public openContact(id: string) {
    this.showContact(id)
  }

  /**
   * 通讯录(联系人)选择器
   * <br/>
   * FIXME: 没有错误处理
   * @platform `Windows` | `Android` | `IOS`
   * @param params
   * @param callback
   * @deprecated 使用selectSession 或 selectUser 取代
   */
  public selectContact(
    params: SelectContactParams,
    callback: LegacyCallback<SelectContactResponse>,
  ): void
  public selectContact(
    params: SelectContactParams,
  ): Promise<SelectContactResponse>
  public selectContact(
    params: SelectContactParams,
    callback?: LegacyCallback<SelectContactResponse>,
  ): Promise<SelectContactResponse> | void {
    const _params = {
      user: [],
      type: 'multiple',
      unselect: true,
      limit: 10000,
      ...params,
    }

    return new Promise((resolve, reject) => {
      this.setUpBridge(bridge => {
        bridge.callHandler(Handlers.OPEN_CONTACT, _params, res => {
          try {
            const data = parse(res)
            if (typeof callback === 'function') {
              deprecatedLegacyCallback('selectContact')
              callback(data)
            }
            resolve(data)
          } catch (err) {
            reject(err)
          }
        })
      })
    })
  }

  /**
   * 选择用户
   * openContact 客户端已经不再维护，这个方法用于取代selectContact方法，返回值和参数都和
   * selectContact保持一致, 但底层基于 selectSession
   */
  public async selectUser(
    params: SelectContactParams & { title?: string },
  ): Promise<SelectContactResponse> {
    const {
      type = 'multiple',
      unselect = true,
      limit = 10000,
      user,
      ...other,
    } = params
    const sessionType: SessionType = 'user'
    const normalizedParams: SelectSessionParams = {
      multiple: type === 'multiple',
      sessionType: [sessionType],
      selected: user
        ? user.map(i => ({
            sessionId: i.id,
            sessionType,
            icon: i.avatar,
            name: i.name,
          }))
        : undefined,
      limit,
      unselect,
      ...other,
    }

    const res = await this.selectSession(normalizedParams)
    return res.map(i => {
      const { sessionId: id, icon: avatar, name, ...other } = i
      return {
        id,
        avatar: avatar!,
        name: name!,
        ...other,
      }
    })
  }

  /**
   * 设置Bar颜色
   * > 注意：目前只支持`RGB hex`格式的颜色值， 如`#FFFFFF`
   * @platform `Android` | `IOS`
   * @param color 颜色值
   */
  public setBarColor(color: string) {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.SET_BAR_COLOR, { color })
    })
  }

  /**
   * 设置Bar的显示和隐藏, 也可以使用`showBar`显示， `hideBar` 隐藏
   * @platform `Android` | `IOS`
   * @param visible
   * @see showBar
   * @see hideBar
   */
  public setBarVisible(visible: boolean) {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.SET_BAR_VISIBLE, { flag: !visible })
    })
  }

  /**
   * 显示Bar
   * @platform `Android` | `IOS` | `PC`
   * @param flag 已废弃，兼容旧版本接口
   */
  public showBar(flag?: boolean) {
    if (Device.windows()) {
      this.setUpBridge(bridge => {
        bridge.callHandler(Handlers.SET_BAR_VISIBLE_PC, null)
      })
    } else {
      this.setBarVisible(!flag || true)
    }
  }

  /**
   * 隐藏Bar
   * PC无法隐藏Bar
   * @platform `Android` | `IOS`
   */
  public hideBar() {
    this.setBarVisible(false)
  }

  /**
   * 设置状态栏，并监听事件
   * <br/>
   * @platform `Android` | `IOS`
   * @param params
   * @param callback
   * @deprecated
   */
  public settingBar(
    params: Partial<SetBarParams>,
    callback: LegacyCallback<SetBarResponseOld>,
  ): void
  public settingBar(
    params: Partial<SetBarParams>,
    callback?: LegacyCallback<SetBarResponseOld>,
  ) {
    deprecated('settingBar 已经废弃')
    const _params = { ...defaultSetBarParams, ...params }
    this.setUpBridge(bridge => {
      bridge.callHandler(
        Handlers.SET_BAR,
        { ..._params, hideMoreBtn: _params.hideMoreBtn.toString() },
        res => {
          const data: SetBarResponseOld = parse(res)
          if (typeof callback === 'function') {
            callback(data)
          }
        },
      )
    })
  }

  /**
   * 关闭web应用窗口
   * @platform *
   * @alias exitApp
   */
  public exit = () => {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.EXIT, undefined)
    })
  }

  /**
   * 关闭web应用窗口
   * @platform *
   * @deprecated 使用exit代替
   * @alias exit
   */
  public exitApp() {
    return deprecated(deprecatedTemplate('exitApp', 'exit'), this.exit, this)()
  }

  /**
   * 日期选择器
   * @deprecated 很少使用，而且不是所有平台都支持
   */
  public date() {
    deprecated('date() 方法已废弃， 请使用客户端日期组件代替')
  }

  /**
   * 获取当前位置
   * FIXME: native 端没有错误处理
   * @platform `Windows` | `Android` | `IOS` | `Web`
   * @alias getLoc
   */
  public getLocation(callback: LegacyCallback<GetLocationResponse>): void
  public getLocation(
    options: Partial<GetLocationOptions>,
    callback: LegacyCallback<GetLocationResponse>,
  ): void
  public getLocation(
    options?: Partial<GetLocationOptions>,
  ): Promise<GetLocationResponse>
  public getLocation(
    options?: Partial<GetLocationOptions> | LegacyCallback<GetLocationResponse>,
    callback?: LegacyCallback<GetLocationResponse>,
  ): Promise<GetLocationResponse> | void {
    const _options =
      typeof options === 'function' || options == null
        ? defaultGetLocationOptions
        : { ...defaultGetLocationOptions, ...options }
    const _callback = typeof options === 'function' ? options : callback

    return new Promise((resolve, reject) => {
      if (_options.preferNative) {
        delete _options.preferNative
        // android 使用原生接口
        this.setUpBridge(bridge => {
          bridge.callHandler(Handlers.GET_LOCATION, _options, res => {
            try {
              const rawData = parse(res)
              // 成功返回是一个数组
              if (!Array.isArray(rawData)) {
                throw new BridgeResponseError(rawData.errCode, '获取位置失败')
              }
              const data: {
                longitude: string
                latitude: string
                address: string
                speed: string
                coordType: string
                accuracy: string
              } = parse(res)[0]
              const address = data.address
              const coordType = data.coordType
              const latitude = parseFloat(data.latitude)
              const longitude = parseFloat(data.longitude)
              // km/h
              let speed = parseFloat(data.speed)
              const meterInOnHour = speed * 1000
              // 转化为m/s
              speed = meterInOnHour / 3600
              const accuracy = parseFloat(data.accuracy)
              // android 默认返回百度地图坐标，但是中国地区外的是GPS坐标
              const response: GetLocationResponse = {
                latitude,
                longitude,
                address,
                speed,
                accuracy,
                // FIXME: android这里返回的是bd09ll
                coordType:
                  coordType === 'bd09ll' ? 'BD09' : coordType as CoordType,
              }
              if (typeof _callback === 'function') {
                deprecatedLegacyCallback('getLocation')
                _callback(response)
              }
              resolve(response)
            } catch (error) {
              reject(error)
            }
          })
        })
      } else {
        // 使用HTML5获取
        navigator.geolocation.getCurrentPosition(
          location => {
            const { latitude, longitude, accuracy, speed } = location.coords
            const res: GetLocationResponse = {
              latitude,
              longitude,
              accuracy,
              speed,
              coordType: 'WGS84',
            }
            if (typeof _callback === 'function') {
              _callback(res)
            }
            resolve(res)
          },
          error => {
            const { code, message } = error
            reject(new BridgeResponseError(code, message))
          },
          _options,
        )
      }
    })
  }

  /**
   * 获取当前位置
   * @platform *
   * @alias getLocation
   * @deprecated 使用getLocation代替
   */
  public getLoc(callback: LegacyCallback<GetLocationResponse>): void {
    deprecated(
      deprecatedTemplate('getLoc', 'getLocation'),
      this.getLocation,
      this,
    )(callback)
  }

  public geoNavigate(from: GeoNavigateParams, to: GeoNavigateParams) {
    this.setUpBridge(bridge => {
      const payload = {
        to,
        from,
        coordType: 'WGS84',
      }
      bridge.callHandler(Handlers.GEO_NAVIGATE, payload)
    })
  }

  /**
   * 获取应用和可用API信息
   * <br/>
   * FIXME: 待测试
   * @platform *
   * @param callback
   * @alias getList
   */
  public apiInfos(callback: LegacyCallback<APIInfosResponseOld>): void
  public apiInfos(): Promise<APIInfosResponse>
  public apiInfos(
    callback?: LegacyCallback<APIInfosResponseOld>,
  ): Promise<APIInfosResponse> | void {
    return new Promise((resolve, reject) => {
      this.setUpBridge(bridge => {
        bridge.callHandler(Handlers.API_INFOS, null, res => {
          try {
            const data: APIInfosResponseOld = parse(res)
            if (typeof callback === 'function') {
              deprecatedLegacyCallback('apiInfos')
              callback(data)
            }
            resolve({
              platform: data.plat,
              version: data.version,
              API: data.apilist,
            })
          } catch (err) {
            reject(err)
          }
        })
      })
    })
  }

  /**
   * 获取应用和可用API信息
   * @deprecated 使用`apiInfos`代替
   * @alias apiInfos
   * @param callback
   */
  public getList(callback: (res: APIInfosResponseOld) => void): void {
    deprecated(deprecatedTemplate('getList', 'apiInfos'), this.apiInfos, this)(
      callback,
    )
  }

  /**
   * 扫二维码
   * @platform `Android` | `IOS`
   * @alias QRcode
   * @param needResult 指定是否返回结果
   * @param callback
   */
  public scanQRCode(
    needResult: boolean,
    callback: LegacyCallback<QRCodeResponse>,
  ): void
  public scanQRCode(callback: LegacyCallback<QRCodeResponse>): void
  public scanQRCode(needResult?: boolean): Promise<QRCodeResponse>
  public scanQRCode(
    needResult?: boolean | LegacyCallback<QRCodeResponse>,
    callback?: LegacyCallback<QRCodeResponse>,
  ): Promise<QRCodeResponse> | void {
    const _needResult = typeof needResult === 'boolean' ? needResult : true
    const _callback = typeof needResult === 'function' ? needResult : callback
    return new Promise((resolve, reject) => {
      this.setUpBridge(bridge => {
        bridge.callHandler(
          Handlers.SCAN_QRCODE,
          { needResult: _needResult },
          res => {
            try {
              const data: QRCodeResponse = parse(res)
              if (typeof _callback === 'function') {
                deprecatedLegacyCallback('scanQRCode')
                _callback(data)
              }
              resolve(data)
            } catch (err) {
              reject(err)
            }
          },
        )
      })
    })
  }

  /**
   *
   * 扫二维码
   * @platform `Android` | `IOS`
   * @alias scanQRCode
   * @deprecated 使用`scanQRCode`代替
   * @param needResult
   * @param callback
   */
  public QRcode(
    needResult: boolean,
    callback: LegacyCallback<QRCodeResponse>,
  ): void {
    deprecated(deprecatedTemplate('QRcode', 'scanQRCode'), this.scanQRCode)(
      needResult,
      callback,
    )
  }

  /**
   * 分享
   * @platform `Android` | `IOS`
   * TODO: 可以改进， 允许自定义分享内容
   */
  public shareTo(): void {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.SHARE_TO, null)
    })
  }

  /**
   * 打开会话框
   * @platform *
   * @alias Dialog
   * @param params 选项
   * + type: 会话类型, 1 群聊 2 单聊 3公告广播
   * + id: 会话ID， 群组id或个人id
   * + messageId: //消息记录ID
   */
  public openDialog(params: DialogParams) {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.OPEN_DIALOG, params)
    })
  }

  /**
   * 打开会话框
   * @platform *
   * @deprecated 使用openDialog代替
   * @alias openDialog
   */
  public Dialog(params: DialogParams | DialogType, id: string) {
    const _params =
      typeof params === 'object'
        ? params
        : {
            type: params,
            id,
          }
    deprecated(deprecatedTemplate('Dialog', 'openDialog'), this.openDialog)(
      _params,
    )
  }

  /**
   * 选择图片
   * @platform *
   */
  public chooseImg(params?: ChooseImgParams): Promise<ChooseImgResponse>
  public chooseImg(
    params?: ChooseImgParams,
    callback?: LegacyCallback<ChooseImgResponseOld>,
  ): void
  public chooseImg(
    params?: ChooseImgParams | LegacyCallback<ChooseImgResponseOld>,
    callback?: LegacyCallback<ChooseImgResponseOld>,
  ): Promise<ChooseImgResponse> | void {
    const _params =
      params == null || typeof params === 'function'
        ? defaultChooseImageParams
        : { ...defaultChooseImageParams, ...params }
    const _callback = typeof params === 'function' ? params : callback
    return new Promise((resolve, reject) => {
      this.setUpBridge(bridge => {
        bridge.callHandler(Handlers.CHOOSE_IMG, _params, res => {
          try {
            const data: ChooseImgResponseOld = parse(res)
            if (typeof _callback === 'function') {
              deprecatedLegacyCallback('chooseImg')
              _callback(data)
            }
            if (data.result === 'true') {
              const {
                imgData: dataUrl,
                imgHeight: height,
                imgWidth: width,
                imgType: extension,
                quality,
              } = data
              resolve({ dataUrl, width, height, extension, quality })
            } else {
              const error = new BridgeResponseError(data.errCode, data.errMsg)
              reject(error)
            }
          } catch (err) {
            reject(err)
          }
        })
      })
    })
  }

  /**
   * 预览图片
   * @param params
   *  + url 字符串数组，需要预览的图片url
   *  + index 当前显示的图片索引
   */
  public previewImg(params: PreviewImgParams): Promise<void> {
    return new Promise((resolve, reject) => {
      this.setUpBridge(bridge => {
        bridge.callHandler(Handlers.PREVIEW_IMG, params, res => {
          try {
            const data: PreviewImgResponse = parse(res)
            if (data.result === 'true') {
              resolve()
            } else {
              reject(new BridgeResponseError(data.errCode, data.errMsg))
            }
          } catch (err) {
            reject(err)
          }
        })
      })
    })
  }

  /**
   * 打开指定文件
   * @param {string} url 文件url
   */
  public openFile(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Device.bridgeAvailable().then(avail => {
        if (avail && Device.windows()) {
          this.setUpBridge(bridge => {
            bridge.callHandler(Handlers.OPEN_FILE, { url }, res => {
              const data: BridgeCommonResponse = parse(res)
              if (
                typeof data.result === 'boolean'
                  ? data.result
                  : data.result === 'true'
              ) {
                resolve()
              } else {
                reject(new BridgeResponseError(data.errCode, data.errMsg))
              }
            })
          })
        } else {
          window.open(url)
          resolve()
        }
      })
    })
  }

  /**
   * 打开指定视频
   * @param  url 文件url
   */
  public openVideo(url: string, extType?: string) {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.OPEN_VIDEO, { url, extType })
    })
  }

  public addMenuItem(
    title: string,
    callback: (err: BridgeResponseError | null) => void,
  ) {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.JM_DEBUG === 'true'
    ) {
      if (title in this.menuItems) {
        console.warn(`[GZB-JSSDK]: 菜单项 ${title} 已存在`)
      }
    }
    this.addNativeMenuItem({ id: String(uid++), title }, callback)
  }

  public removeMenuItem(title: string) {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.JM_DEBUG === 'true'
    ) {
      if (!(title in this.menuItems)) {
        console.warn(`[GZB-JSSDK]: 菜单项 ${title} 不存在`)
      }
    }
    if (title in this.menuItems) {
      this.setUpBridge(bridge => {
        bridge.callHandler(Handlers.REMOVE_MENU_ITEM, {
          ids: [this.menuItems[title]],
        })
        delete this.menuItems[title]
      })
    }
  }

  /**
   * 控制更多按钮菜单下的原生按钮
   *
   * @param {SetNativeMenuItemParams} params
   * @memberof Api
   */
  public setNativeMenuItem(params: SetNativeMenuItemParams) {
    this.setUpBridge(bridge => {
      bridge.callHandler(Handlers.SET_NATIVE_MENU_ITEM, params)
    })
  }

  /**
   * 用户获取会话id
   * @platform *
   * @param params 参数
   *   + `multiple`: 表示支持多选
   *   + `title`: 设置对话框的标题
   *   + `sessionType?`: SessionType[] 会话类型
   *   + `limit?`: 限定选择数
   *   + `selected?`: 已选择的会话
   *   + `unselected?`: 是否可以取消选择
   *   + `tenementId?`: 企业ID
   * @param callback 回调函数
   */
  public selectSession(
    params: SelectSessionParams,
    callback: LegacyCallback<SelectSessionResponseOld>,
  ): void
  public selectSession(callback: LegacyCallback<SelectSessionResponseOld>): void
  public selectSession(
    params?: SelectSessionParams,
  ): Promise<SelectSessionResponse>
  public selectSession(
    params?: SelectSessionParams | LegacyCallback<SelectSessionResponseOld>,
    callback?: LegacyCallback<SelectSessionResponseOld>,
  ): Promise<SelectSessionResponse> | void {
    const _options =
      params == null || typeof params === 'function'
        ? defaultSelectSessionParams
        : { ...defaultSelectSessionParams, ...params }
    const _callback = typeof params === 'function' ? params : callback

    return new Promise((resolve, reject) => {
      this.setUpBridge(bridge => {
        bridge.callHandler(Handlers.SELECT_SESSION, _options, res => {
          try {
            const data: SelectSessionResponseOld = parse(res)
            if (typeof _callback === 'function') {
              deprecatedLegacyCallback('SelectSession')
              _callback(data)
            }
            if (data.result === 'true') {
              resolve(data.session)
            } else {
              const error = new BridgeResponseError(data.errCode, data.errMsg)
              reject(error)
            }
          } catch (err) {
            reject(err)
          }
        })
      })
    })
  }

  /**
   * 获取系统语言
   * @param callback 回调
   */
  public getLanguage(callback: LegacyCallback<GetLanguageResponseOld>): void
  public getLanguage(): Promise<string>
  public getLanguage(
    callback?: LegacyCallback<GetLanguageResponseOld>,
  ): Promise<string> | void {
    return new Promise((resolve, reject) => {
      this.setUpBridge(bridge => {
        bridge.callHandler(Handlers.GET_LANGUAGE, null, res => {
          try {
            const data: GetLanguageResponseOld = parse(res)
            if (typeof callback === 'function') {
              deprecatedLegacyCallback('getLanguage')
              callback(data)
            }
            if (data.result === 'true') {
              resolve(data.language)
            } else {
              const error = new BridgeResponseError(data.errCode, data.errMsg)
              reject(error)
            }
          } catch (err) {
            reject(err)
          }
        })
      })
    })
  }

  /**
   * 返回到上一页， 如果是第一页，即无法回退了， 将关闭应用
   */
  public goback() {
    const prevPage = window.location.href
    window.history.go(-1)
    // 如何判断当前页面时第一个页面？即不能后退
    setTimeout(() => {
      if (window.location.href === prevPage) {
        this.exit()
      }
    }, 500)
  }

  public constructor() {
    super()
    setTimeout(() => {
      this.setupEventWatchers()
      Device.bridgeAvailable().then(() => {
        const readyEvent = new CustomEvent(Events.ready)
        this.emit(Events.ready, readyEvent)
        this.isReady = true
        this.innerAddEventListener('__addListener__', eventType => {
          if (eventType === Events.ready) {
            this.emit(Events.ready, readyEvent)
          }
        })
      })
    }, 0)
  }

  public teardown() {
    this.teardownEventWatchers()
  }

  private addNativeMenuItem(
    payload: { id: string; title: string },
    callback: (err: BridgeResponseError | null) => void,
  ) {
    const { id, title } = payload
    this.setUpBridge(bridge => {
      this.menuItems[title] = id
      bridge.callHandler(Handlers.ADD_MENU_ITEM, payload, res => {
        const data: BridgeCommonResponse = parse(res)
        if (data.result === 'true') {
          callback(null)
          // 重新监听
          if (title in this.menuItems) {
            this.addNativeMenuItem(payload, callback)
          }
        } else {
          callback(new BridgeResponseError(data.errCode, data.errMsg))
        }
      })
    })
  }

  private setupEventWatchers() {
    this.setupBeforeUnloadWatcher()
    this.setupBeforeGoBackWatcher()
  }

  // 解除事件捕获
  private teardownEventWatchers() {
    this.teardownBeforeUnloadWatcher()
    this.teardownBeforeGoBackWatcher()
  }

  protected innerAddEventListener(
    eventType: string,
    callback: (data: any) => void,
  ) {
    return super.addListener(eventType, callback)
  }

  /**
   * 返回事件
   */
  private setupBeforeGoBackWatcher() {
    this.setupEventWatcher(Events.beforegoback, () => {
      const event = new CustomEvent(Events.beforegoback, {
        cancelable: true,
      })
      const res = this.emit(Events.beforegoback, event)
      const defaultPrevented =
        event.defaultPrevented || res.some(v => v === false)
      if (!defaultPrevented) {
        // 默认行为
        this.goback()
      }
    })
  }

  private teardownBeforeGoBackWatcher() {
    this.teardownEventWatcher(Events.beforegoback)
  }

  private teardownBeforeUnloadWatcher() {
    this.teardownEventWatcher(Events.beforeunload)
  }

  /**
   * 捕获窗口关闭事件
   */
  private setupBeforeUnloadWatcher() {
    const hasPreventDefault = (res: any[]) =>
      res.some(v => v === false || (typeof v === 'string' && v !== ''))
    const getConfirmMessage = (res: any[]) =>
      res.find(v => typeof v === 'string' && v !== '')

    this.setupEventWatcher(Events.beforeunload, () => {
      const event = new CustomEvent(Events.beforeunload, {
        cancelable: true,
      })
      const res = this.emit(Events.beforeunload, event)
      if (hasPreventDefault(res) || event.defaultPrevented) {
        const confirm = getConfirmMessage(res) || event.returnValue
        // 如果传递了确认信息， 将默认使用window.confirm
        if (confirm) {
          if (window.confirm(confirm)) {
            this.exit()
          }
        }
      } else {
        this.exit()
      }
    })
  }
}

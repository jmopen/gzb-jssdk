/**
 * Bridge 接口请求和响应协议
 * @module
 */ /** */

/**
 * 通用 Bridge响应字段
 */
export interface BridgeCommonResponse {
  /**
   * 响应状态
   */
  result: 'true' | 'false'
  /** 
   * 错误代码
   */
  errCode: number
  /**
   * 错误描述
   */
  errMsg: string
}

/**
 * 兼容旧版的API回调函数
 * @deprecated 请尽量使用新版的Promise进行API调用
 */
export type LegacyCallback<R> = (res: R) => void

/**
 * 图片类型
 */
export type ImageType = 'bmp' | 'gif' | 'jpg' | 'png'

/**
 * 选择图片请求参数
 */
export interface ChooseImgParams {
  /**
   * 图片质量，1 - 100
   */
  quality?: number
  /**
   * 设置缩放后的边大小
   */
  target?: number
  /**
   * 设置target应用到的边, 默认为default
   */
  targetType?: 'default' | 'width' | 'height'
  /**
   * 操作类型， camera 打开相机， gallery打开相册. 
   * 默认为default，弹出一个actionsheet， 由 * 用户自主选择
   */
  actionType?: 'default' | 'camera' | 'gallery'
  /**
   * 图片扩展类型
   */
  extType?: ImageType[]
  /**
   * 选中后返回的图片格式(如果没有指定, 默认返回jpeg类型)
   */
  returnExt?: ImageType
  /**
   * 最大体积， 单位为kb
   */
  maxSizeKb?: number
}

/**
 * 旧版的选择图片返回数据, 以回调形式调用时，将返回这个格式的对象，用于向下兼容
 * <br>
 * TODO: remove in future version
 * @deprecated
 */
export interface ChooseImgResponseOld extends BridgeCommonResponse {
  quality: number
  imgData: string
  name: string
  imgType: ImageType
  imgWidth: number
  imgHeight: number
}

/**
 * 选择图片返回数据
 */
export interface ChooseImgResponse {
  width: number
  height: number
  name?: string
  quality: number
  extension: ImageType
  dataUrl: string
}

/**
 * 获取当前为位置请求参数, 请求参数和HTML5的`Geolocation.getCurrentLocation`一致
 */
export interface GetLocationOptions extends PositionOptions {
  /**
   * 是否优先调用原生接口， 默认为true
   */
  preferNative: boolean
  watch: boolean
}

/**
 * 地图坐标类型，在中国地区，所有地图的坐标都是经过加密的, 中国地区以外都是GPS坐标
 * + WGS84 是GPS坐标
 * + GCJ02 是火星坐标，在中国地区，高德、GoogleMap都是使用这个格式的坐标
 * + BD08 百度坐标
 */
export type CoordType = 'WGS84' | 'GCJ02' | 'BD09'

/**
 * 获取当前位置响应
 */
export interface GetLocationResponse {
  latitude: number
  longitude: number
  speed: number | null
  /**
   * 坐标类型
   */
  coordType: CoordType
  /**
   * 精度(m)
   */
  accuracy?: number
  /**
   * 反向解析的中文详细地址
   */
  address?: string
}

export interface GeoNavigateParams {
  latitude: number
  longitude: number
  address: string
}

export type BarButtonId = 'close' | 'goback'
export interface SetBarParams {
  hideMoreBtn: boolean
  left: [string, string]
  onlyCallBack: BarButtonId[]
  gobackUrl: string
  right: string
}

export interface SetBarResponse {
  buttonName: string
  buttonId: BarButtonId
}

// TODO: remove in future version
export interface SetBarResponseOld extends SetBarResponse {
  result: 'true' | 'false'
}

/**
 * locationTo 打开指定连接请求参数
 */
export interface LocationToParams {
  url: string
  showMode?: 'inner' | 'outer'
}

/**
 * 获取应用和API信息 请求参数
 */
export interface APIInfosResponse {
  platform: 'IOS' | 'PC' | 'Android'
  version: string
  API: string[]
}

// TODO: remove in future version
export interface APIInfosResponseOld {
  plat: 'IOS' | 'PC' | 'Android'
  version: string
  apilist: string[]
}

export interface QRCodeResponse {
  content: string
}

/**
 * 会话类型
 */
export enum DialogType {
  /**
   * 群聊
   */
  GroupChat = 1,
  /**
   * 单聊
   */
  Chat,
  /**
   * 公告广播
   */
  Announcement,
  /**
   * 打开访客聊天窗口, id为访客id
   */
  Visitor,
}

/**
 * 打开会话框请求参数
 */
export interface DialogParams {
  type: DialogType
  id: string
  messageId?: string
}

/**
 * 选择联系人请求参数
 */
export interface SelectContactParams {
  /**
   * 已选中联系人信息
   */
  user?: Array<{
    id: string
    name: string
  }>
  /**
   * 企业id
   */
  tenementId: string
  /**
   * 限制数，只有在type为multple时有效
   */
  limit?: number
  /**
   * 是否可以取消选择
   */
  unselect?: boolean
  /**
   * 选择类型
   */
  type?: 'single' | 'multiple'
}

/**
 * 选择联系人响应
 */
export type SelectContactResponse = Array<{
  id: string
  name: string
  avatar: string
}>

/**
 * 选择会话请求参数
 */
export interface SelectSessionParams {
  /**
   * 是否支持多选
   */
  multiple?: boolean
  /**
   * 对话框显示的标题
   */
  title?: string
}

/**
 * 选择会话响应参数, 兼容旧版
 */
export interface SelectSessionResponseOld extends BridgeCommonResponse {
  session: Array<{
    sessionId: string
    sessionType: 'user' | 'chatroom'
  }>
}

/**
 * 选择会话响应参数
 */
export type SelectSessionResponse = SelectSessionResponseOld['session']

/**
 * 获取语言响应参数， 兼容旧版
 */
export interface GetLanguageResponseOld extends BridgeCommonResponse {
  language: string
}

// 1.1

/**
 * 预览图片请求参数
 */
export interface PreviewImgParams {
  url: string[]
  index: number
}

export type PreviewImgResponse = BridgeCommonResponse

export enum NativeMenuItem {
  refresh = 'refresh',
  share = 'share',
  copyLink = 'copyLink',
  openWithBrowser = 'openWithBrowser',
}
export interface SetNativeMenuItemParams {
  id: NativeMenuItem
  visible: boolean
}

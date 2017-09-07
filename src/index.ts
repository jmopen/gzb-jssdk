/**
 * JSSDK main file
 * @module
 */ /** */
import Device, { DeviceDector } from './DeviceDetector'
import EventEmitter from './EventEmitter'
import * as Utils from './utils'
import Api from './Api'
import MobileApi from './MobileApi'
import DesktopApi from './DesktopApi'
import { BridgeResponseError } from './Bridge'

// 兼容旧版API入口
// tslint:disable-next-line:no-namespace
declare global {
  interface Window {
    customApi: object
    JH: object
  }
}

export {
  Api,
  BridgeResponseError,
  DesktopApi,
  Device,
  DeviceDector,
  EventEmitter,
  MobileApi,
  Utils,
}

export function api() {
  const DefaultAPI = Device.mobile() ? MobileApi : DesktopApi
  return DefaultAPI.getInstance()
}
export default api

// for browser only(will remove by uglify or rollup)
if (process.env.MODULE_TYPE === 'umd') {
  const WARN = "JH.Detector已经废弃，请使用`import { Device } from 'gzb-jssdk'`代替"
  class JHDetector extends DeviceDector {
    public Android = Utils.deprecated(WARN, this.android, this)
    public BlackBerry = Utils.deprecated(WARN, this.blackberry, this)
    public IOS = Utils.deprecated(WARN, this.ios, this)
    public Windows = Utils.deprecated(WARN, this.windows, this)
    public isMobile = Utils.deprecated(WARN, this.mobile, this)
    public isWebkit = Utils.deprecated(WARN, this.webkit, this)
    public isiPad = Utils.deprecated(WARN, this.ipad, this)
    public isiPhone = Utils.deprecated(WARN, this.iphone, this)
    public isiPod = Utils.deprecated(WARN, this.ipod, this)
  }

  window.customApi = {
    init: api,
  }
  window.JH = {
    Detector: new JHDetector(),
  }
}

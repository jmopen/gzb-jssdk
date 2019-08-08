/**
 * ## 设备检测器
 * @module
 * @example
 * <br/>
 * ```typescript
 * import { Device } from 'gzb-jssdk'
 * if (Device.mobile()) {
 *   // is mobile
 * } else if (Device.tablet()) {
 *   // is tablet
 * } else {
 *   // is desktop
 * }
 * ```
 */ /**  */
import { MobileBridge } from './Bridge'

export class DeviceDector {
  private userAgent: string
  /**
   * 检测是否是webkit
   */
  public webkit() {
    return this.find('applewebkit')
  }

  public isGZB() {
    return this.find('gzb')
  }

  /**
   * 检测桥接是否可用
   */
  public bridgeAvailable(): Promise<boolean> {
    return new Promise(resolve => {
      if (this.isGZB()) {
        resolve(true)
      } else if (this.windows()) {
        return resolve(window.HandleEvent != null)
      } else if (this.ios() || this.android() || this.mac()) {
        if (window.WebViewJavascriptBridge != null) {
          resolve(true)
        } else {
          MobileBridge.getInstance().setUpBridge(bridge => {
            resolve(true)
          })
        }
      } else {
        resolve(false)
      }
    })
  }

  /**
   * 检测是否是Windows
   * @export
   * @returns 
   */
  public windows() {
    return this.find('windows')
  }

  /**
   * 检测是否是windows phone
   */
  public windowsPhone() {
    return this.windows() && this.find('phone')
  }

  /**
   * 检测是否是windows phone
   */
  public windowsTablet() {
    return this.windows() && !this.find('phone') && this.find('touch')
  }

  /**
   * 检测是否是iphone
   */
  public iphone() {
    return !this.windows() && this.find('iphone')
  }

  /**
   * 检测是否是ipad
   */
  public ipad() {
    return this.find('ipad')
  }

  /**
   * 检测是否是ipod
   */
  public ipod() {
    return this.find('ipod')
  }

  /**
   * 检测是否是ios
   */
  public ios() {
    return this.iphone() || this.ipad() || this.ipod()
  }

  /**
   * 检测是否是android
   */
  public android() {
    return !this.windows() && this.find('android')
  }

  /**
   * 检测是否是android phone
   */
  public androidPhone() {
    return this.android() && this.find('mobile')
  }

  /**
   * 检测是否是android 平板
   */
  public androidTablet() {
    return this.android() && !this.find('mobile')
  }

  public mac() {
    return this.find('macintosh')
  }

  /**
   * 检测是否是black berry
   */
  public blackberry() {
    return this.find('blackberry') || this.find('bb10') || this.find('rim')
  }

  /**
   * 检测是否是black berry phone
   */
  public blackberryPhone() {
    return this.blackberry() && !this.find('tablet')
  }

  /**
   * 检测是否是black berry tablet
   */
  public blackberryTablet() {
    return this.blackberry() && this.find('tablet')
  }

  public miniprogram() {
    return this.find('miniprogram')
  }

  /**
   * 检测是否是手机
   */
  public mobile() {
    return (
      this.androidPhone() ||
      this.iphone() ||
      this.ipod() ||
      this.windowsPhone() ||
      this.blackberryPhone()
    )
  }

  /**
   * 检测是否是平板
   */
  public tablet() {
    return (
      this.ipad() ||
      this.androidTablet() ||
      this.blackberryTablet() ||
      this.windowsTablet()
    )
  }

  /**
   * 检测是否是桌面端
   */
  public desktop() {
    return !this.mobile() && !this.tablet()
  }

  /**
   * 检测是否是竖向
   */
  public portrait() {
    return window.innerHeight / window.innerWidth > 1
  }

  /**
   * 检测是否是横向
   */
  public landscape() {
    return !this.portrait()
  }

  public setUserAgent(userAgent: string) {
    this.userAgent = userAgent
  }

  public constructor() {
    this.initializeUserAgent()
  }

  protected initializeUserAgent() {
    this.userAgent = window.navigator.userAgent.toLowerCase()
  }

  private find(str: string): boolean {
    return this.userAgent.indexOf(str) !== -1
  }
}

export default new DeviceDector()

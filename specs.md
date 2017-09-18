# GZB JSSDK 接口协议

当前版本: 1.0.0

<!-- TOC -->

- [GZB JSSDK 接口协议](#gzb-jssdk-接口协议)
  - [1. 概述](#1-概述)
  - [2. 接口规范](#2-接口规范)
    - [1.1 请求数据](#11-请求数据)
    - [1.2 返回数据](#12-返回数据)
    - [1.3 示例](#13-示例)
  - [3. 接口列表](#3-接口列表)
    - [设置标题(setTitle)](#设置标题settitle)
    - [打电话(makecalltonumber)](#打电话makecalltonumber)
    - [发短信](#发短信)
    - [发送邮件(openMail)](#发送邮件openmail)
    - [打开链接(openUrl)](#打开链接openurl)
    - [打开名片(openContactItem)](#打开名片opencontactitem)
    - [选择联系人(openContact)](#选择联系人opencontact)
    - [设置状态栏颜色(setBarColor)](#设置状态栏颜色setbarcolor)
    - [显示和隐藏状态栏(showBar)](#显示和隐藏状态栏showbar)
    - [设置状态栏(setBar)](#设置状态栏setbar)
    - [退出Web App 应用(exitWebApp)](#退出web-app-应用exitwebapp)
    - [获取当前位置(getLocation)](#获取当前位置getlocation)
    - [获取应用信息(apiList)](#获取应用信息apilist)
    - [获取应用当前语言(getLanguage)](#获取应用当前语言getlanguage)
    - [扫码(scanQRCode)](#扫码scanqrcode)
    - [分享(shareTo)](#分享shareto)
    - [打开会话框(openDialog)](#打开会话框opendialog)
    - [选择会话(selectSession)](#选择会话selectsession)
    - [图片选择器(chooseImg)](#图片选择器chooseimg)
  - [4. 更新计划/进度](#4-更新计划进度)
  - [5. 历史记录](#5-历史记录)

<!-- /TOC -->

## 1. 概述

* JSSDK是工作宝向网页开发者提供的基于工作宝客户端的网页开发工具包。
* 通过使用JSSDK，网页开发者可借助工作宝客户端高效地使用拍照、选图、位置等手机系统的能力，为工作宝用户提供更优质的网页体验。

## 2. 接口规范

### 1.1 请求数据

`JSON`字符串数据，例如:

```json
{
  "multiple": true,
  "title": ""
}
```

### 1.2 返回数据

返回json字符串数据，里面的具体内容如下

```js
{
  "result": "true",     // -> 字符串类型，'true'表示成功 'false'表示失败
  "errCode": 701,       // -> 错误码，当result为'false'时才有
  "errMsg": "选择失败",  // -> 错误信息，当result为'false'时才有
  // ... 每个接口相应返其他需要的数据
}
```

### 1.3 示例

```js
  /*
   * selectSession
   * 选择会话（单聊，群聊）
   *
   * Parameters:
   *  @param multiple boolean 是否可以多选，true多选，false单选 默认false
   *  @param title string 选择会话界面的标题 为空时默认值“请选择目标”
   *
   * Return Value:
   * 成功
   * {
   *   "result":"true",
   *   "session":[
   *     {"sessionId":"u151855","sessionType":"user"},
   *     {"sessionId":"jf-mai","sessionType":"user"},
   *     {"sessionId":"1437103167643903556_room","sessionType":"chatroom"}
   *   ]
   * }
   *
   * 取消选择时
   * {"errCode":704,"errMsg":"","result":"false","session":null}
   * 错误码具体看下面表格说明
   *
   * 具体实现例子如下;
   */
  WebViewJavascriptBridge.callHandler(
    'selectSession',
    {
      multiple:true,
      title:''
    },
    function (response) {
			let re
			if (typeof response === 'string') {
        re = JSON.Parse(response);
			} else {
				re = response
			}
    }
  )
```

|错误码(errCode)|错误信息(errMsg)|描述|
|-----|-----|-----|
|701|选择失败|未知异常错误|
|704|取消选择|用户主动取消了选择|

## 3. 接口列表

### 设置标题(setTitle)

* 名称: setTitle
* 描述：设置状态栏标题
* 平台: `IOS` | `ANDROID` | `PC`
* 请求:
```
{
	title: string // 标题名
}
```
* 响应: 无

---

### 打电话(makecalltonumber)

* 名称: makecalltonumber
* 描述: 客户端app接收电话号码后使用网络拨打该号码
* 平台: `ios` | `android` | `pc`
* 请求：
```
{
	callnumber: string // 电话号码
}
```
* 响应: (目前三端都没有回调响应)
```
{
  "result": "true",     // -> 字符串类型，'true'表示成功 'false'表示失败
  "errcode": number,       // -> 错误码, 待协定
  "errmsg": string,  // -> 错误信息，待协定
}
```

---

### 发短信

* 名称: sendSmsToNumber
* 描述: 调出手机原生发送短信界面，发送目标手机号为接口中设置的电话号码   
* 平台: `ios` | `android`
* 请求：
```
{
	callnumber: string | string[] // 电话号码, (提议)callNumber 支持传入数组，以支持群发功能
	content: string,              // (提议) 允许自定义消息内容
}
```
* 响应: (目前三端都没有回调响应)
```
{
  "result": "true",     // -> 字符串类型，'true'表示成功 'false'表示失败
  "errcode": number,       // -> 错误码, 待协定
  "errmsg": string,  // -> 错误信息，待协定
}
```

---

### 发送邮件(openMail)

* 名称: openMail
* 描述: 调出原生邮箱发送页面
* 平台: `ios` | `android` | `PC`
* 请求：
```
{
	email: string | string[]      // 电话号码, (提议)支持传入数组，以支持群发
	cc: string[],                 // (提议) 支持抄送
	subject: string,              // (提议) 支持设置主题
	content: string,              // (提议) 允许自定义消息内容
}
```
* 响应: (目前三端都没有回调响应, 待协定)
```
{
  "result": "true",     // -> 字符串类型，'true'表示成功 'false'表示失败
  "errcode": number,       // -> 错误码, 待协定
  "errmsg": string,  // -> 错误信息，待协定
}
```

---

### 打开链接(openUrl)

* 名称: openUrl
* 描述: 使用新建工作宝APP窗口或使用系统默认浏览器打开指定链接
* 平台: `ios` | `android` | `PC`
* 请求：
```
{
	url: string,                // URL 链接
	showMode: 'outer' | 'inner' // 打开方式， outer 使用系统自带浏览器打开， inner新建工作宝窗口打开
}
```
* 响应: 无

---

### 打开名片(openContactItem)

* 名称: openContactItem
* 描述: 根据用户id打开用户的名片页面
* 平台: `ios` | `android` | `PC`
* 请求：
```
{
	id: string      // 用户id
}
```
* 响应: (目前三端都没有回调响应, 待协定)
```
{
  "result": "true",     // -> 字符串类型，'true'表示成功 'false'表示失败
  "errcode": number,    // -> 错误码, 待协定
  "errmsg": string,     // -> 错误信息，待协定
}
```

---

### 选择联系人(openContact)

* 名称: openContact
* 描述: 打开联系人选择器
* 平台: `ios` | `android` | `PC`
* 请求：
```
{
	user: Array<{id: string, name: string}>,  // 当前已选中的联系人
	tenementId: string,                       // 企业id
	limit: number,                            // 选择的上限， 只有multiple为true时有效
	unselect: boolean,                        // 表示是否可以去取消已选择的联系人
	type: 'single' | 'multiple',              // 选择模式， multiple为多选模式
}
```
* 响应: 
```
array<{
  id: string                                // 用户id
  name: string                              // 用户名
  avatar: string	                          // 用户头像链接
}>

（提议）响应：
{
  "result": "true",     // -> 字符串类型，'true'表示成功 'false'表示失败
  "errcode": number,    // -> 错误码, 待协定
  "errmsg": string,     // -> 错误信息，待协定
	"data": array<{
  id: string            // 用户id
  name: string          // 用户名
  avatar: string        // 用户头像链接
}>
}
```

---

### 设置状态栏颜色(setBarColor)
* 名称: setBarColor
* 描述: 设置状态栏颜色
* 平台: `ios` | `android`
* 请求：
```
{
	color: string,       // 颜色值，(提议)目前只支持#HEX格式的颜色值， 提议支持rgb，rgba， color name等颜色值
}
```
* 响应：无


---

### 显示和隐藏状态栏(showBar)
* 名称: showBar
* 描述: 显示和隐藏状态栏
* 平台: `ios` | `android`
* 请求：
```
{
	flag: boolean,      // flag 为false时隐藏 
}
```
* 响应：无


---

### 设置状态栏(setBar)
* 名称: setBar
* 描述: 显示和隐藏状态栏按钮，绑定按钮点击事件
* 平台: `ios` | `android`
* 请求：
```
type ButtonId = 'close' | 'goback'
{
	hideMoreBtn: 'true' | 'false', // 显示和隐藏更多按钮，（已知问题）, 设置为false，或true会导致应用崩溃
	left: [ButtonId, ButtonId],    // 显示和隐藏返回和关闭按钮，（已知问题）close, goback 只能同时关闭一个
	onlyCallback: ButtonId[],      // 绑定goback或close点击回调
	gobackUrl: string,             // 返回按钮绑定的url
	right: string,                 // 右边按钮 替换文字
}
```
* 响应：
```
{
	"result": "true" | "false",    // 状态，(已知问题) 描述不清晰
	"buttonId": ButtonId,          // 触发事件的按钮
	"buttonName": string,          // 按钮名， (提议)移除
}
```

> 提议: 这个接口职责过重， 建议拆分为多个接口进行调用. 统一PC端和移动端相关接口


---

### 退出Web App 应用(exitWebApp)
* 名称: exitWebApp
* 描述: 退出WebApp应用， 即关闭窗口
* 平台: `ios` | `android` | `PC`
* 请求：无
* 响应：无


---

### 获取当前位置(getLocation)
* 名称: getLocation
* 描述: 获取用户当前位置
* 平台: `ios` | `android` | `PC`
* 请求：
```
{
	enableHignAccuracy: boolean // (提议) 启用高精度
	timeout: number,            // (提议) 超时，毫秒
	// 其他
}
```
* 响应：
```
/**
 * 地图坐标类型，在中国地区，所有地图的坐标都是经过加密的, 中国地区以外都是GPS坐标
 * + WGS84 是GPS坐标
 * + GCJ02 是火星坐标，在中国地区，高德、GoogleMap都是使用这个格式的坐标
 * + BD08 百度坐标
 */
type CoordType = 'WGS84' | 'GCJ02' | 'BD09'

{
  "result": "true",     // (提议) 字符串类型，'true'表示成功 'false'表示失败
  "errcode": number,    // (提议) 错误码, 待协定
  "errmsg": string,     // (提议) 错误信息，待协定
	latitude: number,
	longitude: number,
	coordType: CoordType, // (提议) 坐标类型
	accuracy: number,     // (提议) 精度
	address: string,      // 反向解析的中文地址
}
```


---

### 获取应用信息(apiList)
* 名称: apiList
* 描述: 获取应用信息， 支持API列表
* 平台: `ios` | `android` | `PC`
* 请求：无
* 响应：
```
{
	platform: 'ios' | 'pc' | 'android' | 'macos', // (提议) 平台名
	version: string,                              // (提议) 当前版本
	apiList: string[],                            // (提议) 支持API列表
}
```


---

### 获取应用当前语言(getLanguage)
* 名称: getLanguage
* 描述: 获取应用当前语言， 用于国际化支持
* 平台: `ios` | `android` | `PC`
* 请求：无
* 响应：
```
{
  language: string,
}
```
错误码说明
|错误码errCode	| 错误信息errMsg |	描述 |
|-------------|----------------|-------|
|701	|获取语言失败	|未知异常时提示 |


---

### 扫码(scanQRCode)
* 名称: scanQRCode
* 描述: 扫二维码
* 平台: `ios` | `android`
* 请求：
```
{
	needResult: boolean, // 是否返回结果
}
```
* 响应：
```
{
	content: string,     // 返回结果
}
```


---

### 分享(shareTo)
* 名称: shareTo
* 描述: 分享
* 平台: `ios` | `android`
* 请求： 无
> 提议：目前这个接口可用性不高， 只能分享工作宝APP， 提议可以自定义分享内容和图片
* 响应：无


---

### 打开会话框(openDialog)

* 名称: openDialog
* 描述: 打开会话框， 支持公告、单聊， 群聊
* 平台: `ios` | `android` | `PC`
* 请求： 
```
{
  type: 1 | 2 | 3        // 1群聊，2 单聊， 3 公告广播
  id: string             // 会话id， 群组或用户id
  messageId?: string     // 消息记录id
}
```
当messageId不为空时：
|  本地数据库 | 操作  | toast提示 |
|------------|--------|---------|
|有且在7天内  | 打开会话窗,定位到该条记录| 无 |
|有但不在7天内 | 请下拉加载或搜索查看该条记录 |
| 无          | 打开会话窗 |

* 响应：
> 提议: 回调响应是否打开成功

---

### 选择会话(selectSession)
* 名称: selectSession
* 描述: 会话选择器
* 平台: `ios` | `android` | `PC`
* 请求： 
```
{
  multiple: boolean      // 表示是否允许多选
  title: string          // 对话框title
}
```
* 响应：
```
{
  "result": "true",     // 字符串类型，'true'表示成功 'false'表示失败
  "errcode": number,    // 错误码
  "errmsg": string,     // 错误信息
  "session": Array<{    // 返回结果
    sessionId: string,  // 会话id
    sessionType: 'user' | 'chatroom'  // 会话类型
  }>
}
```
错误码说明:
|错误码errCode	|错误信息errMsg |	描述 |
|--------------|--------------|------|
|701	 | 选择失败 |	未知异常时提示 |
|704 |	用户取消选择 |	用户主动取消选择会话时提示 |

---

### 图片选择器(chooseImg)
* 名称: chooseImg
* 描述: 打开原生相册或相机， 进行图片选择
* 平台: `ios` | `android` | `PC`
* 请求： 
```
{
  quality?: number;      // 图片质量，1 - 100
  target?: number;       //设置缩放后的边大小
  targetType?: 'default' | 'width' | 'height'; //设置target应用到的边, 默认为default
  // (提议) 操作类型， camera 打开相机， gallery打开相册. 默认为default，弹出一个actionsheet， 由 * 用户自主选择
  actionType?: 'default' | 'camera' | 'gallery'; 
  extType?: ImageType[]; // 图片扩展名类型
  maxSizeKb?: number;    // 最大体积， 单位为kb
}
```
缩放参数示例:
|说明 |	targetType |	图片尺寸 |	target |	缩放后尺寸 |
|-----|------------|----------|----------|-----------|
|按最长进行等比例缩放 |default | 800*600 | 400 |400*300 |
|按宽度等比例缩放 | width | 800*600 | 200 |	800/3*200 |
|按高度等比例缩放 | height | 800*600 |200 |	200*600/4 |
执行顺序： 先进行质量压缩，再进行尺寸缩放；
压缩: 只对jpg,jpeg,png进行质量压缩;

* 响应：
```
{

  "result": "true",     // 字符串类型，'true'表示成功 'false'表示失败
  "errcode": number,    // 错误码
  "errmsg": string,     // 错误信息
  quality: number;      // 图片质量
  imgData: string;      // base64 字符串
  name?: string;        // (提议)图片文件名
  imgType: ImageType;   // 图片扩展类型
  imgWidth: number;
  imgHeight: number;
}
```
错误码说明
|错误码|errCode	| 错误信息errMsg |	描述 |
|------|---------|---------------|-------|
|701|	图片选择失败 |	读取图片异常时提示 |
|702|	请选择[extType](png,jpg)类型图片	| extType有设置时，提示 |
|703|	图片原始大小超过[maxSizeKb]kb |	图片原始大小超过maxSizeKb时提示 |
|704|	用户取消选择 | 用户主动取消选择图片时提示 |
|705|	图片压缩失败 | quality有设置,进行压缩失败时提示 |
|706|	图片缩放失败 | 进行缩放失败时提示 |


## 4. 更新计划/进度

## 5. 历史记录
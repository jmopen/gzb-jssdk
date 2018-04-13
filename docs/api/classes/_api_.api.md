[@gdjiami/gzb-jssdk](../README.md) > ["Api"](../modules/_api_.md) > [Api](../classes/_api_.api.md)



# Class: Api

## Hierarchy


 [EventEmitter](_eventemitter_.eventemitter.md)

**↳ Api**

↳  [MobileApi](_mobileapi_.mobileapi.md)




↳  [DesktopApi](_desktopapi_.desktopapi.md)










## Index

### Constructors

* [constructor](_api_.api.md#constructor)


### Properties

* [isReady](_api_.api.md#isready)
* [menuItems](_api_.api.md#menuitems)


### Methods

* [Dialog](_api_.api.md#dialog)
* [QRcode](_api_.api.md#qrcode)
* [addListener](_api_.api.md#addlistener)
* [addMenuItem](_api_.api.md#addmenuitem)
* [addNativeMenuItem](_api_.api.md#addnativemenuitem)
* [apiInfos](_api_.api.md#apiinfos)
* [chooseImg](_api_.api.md#chooseimg)
* [date](_api_.api.md#date)
* [emit](_api_.api.md#emit)
* [exit](_api_.api.md#exit)
* [exitApp](_api_.api.md#exitapp)
* [geoNavigate](_api_.api.md#geonavigate)
* [getLanguage](_api_.api.md#getlanguage)
* [getList](_api_.api.md#getlist)
* [getListenerLength](_api_.api.md#getlistenerlength)
* [getLoc](_api_.api.md#getloc)
* [getLocation](_api_.api.md#getlocation)
* [goback](_api_.api.md#goback)
* [hideBar](_api_.api.md#hidebar)
* [innerAddEventListener](_api_.api.md#inneraddeventlistener)
* [locationTo](_api_.api.md#locationto)
* [mail](_api_.api.md#mail)
* [once](_api_.api.md#once)
* [openContact](_api_.api.md#opencontact)
* [openDialog](_api_.api.md#opendialog)
* [openFile](_api_.api.md#openfile)
* [openVideo](_api_.api.md#openvideo)
* [phone](_api_.api.md#phone)
* [previewImg](_api_.api.md#previewimg)
* [removeAllListener](_api_.api.md#removealllistener)
* [removeListener](_api_.api.md#removelistener)
* [removeMenuItem](_api_.api.md#removemenuitem)
* [scanQRCode](_api_.api.md#scanqrcode)
* [selectContact](_api_.api.md#selectcontact)
* [selectSession](_api_.api.md#selectsession)
* [setBarColor](_api_.api.md#setbarcolor)
* [setBarVisible](_api_.api.md#setbarvisible)
* [setNativeMenuItem](_api_.api.md#setnativemenuitem)
* [setTitle](_api_.api.md#settitle)
* [setUpBridge](_api_.api.md#setupbridge)
* [settingBar](_api_.api.md#settingbar)
* [setupBeforeGoBackWatcher](_api_.api.md#setupbeforegobackwatcher)
* [setupBeforeUnloadWatcher](_api_.api.md#setupbeforeunloadwatcher)
* [setupEventWatcher](_api_.api.md#setupeventwatcher)
* [setupEventWatchers](_api_.api.md#setupeventwatchers)
* [shareTo](_api_.api.md#shareto)
* [showBar](_api_.api.md#showbar)
* [showContact](_api_.api.md#showcontact)
* [sms](_api_.api.md#sms)
* [teardown](_api_.api.md#teardown)
* [teardownBeforeGoBackWatcher](_api_.api.md#teardownbeforegobackwatcher)
* [teardownBeforeUnloadWatcher](_api_.api.md#teardownbeforeunloadwatcher)
* [teardownEventWatcher](_api_.api.md#teardowneventwatcher)
* [teardownEventWatchers](_api_.api.md#teardowneventwatchers)
* [url](_api_.api.md#url)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Api**(): [Api](_api_.api.md)



*Defined in [Api.ts:935](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L935)*





**Returns:** [Api](_api_.api.md)

---


## Properties
<a id="isready"></a>

###  isReady

**●  isReady**:  *`boolean`*  = false

*Defined in [Api.ts:102](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L102)*





___

<a id="menuitems"></a>

### «Private» menuItems

**●  menuItems**:  *object* 

*Defined in [Api.ts:100](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L100)*


#### Type declaration


[title: `string`]: `string`





___


## Methods
<a id="dialog"></a>

###  Dialog

► **Dialog**(params: *[DialogParams](../interfaces/_protocol_.dialogparams.md)⎮`DialogType.GroupChat`⎮`DialogType.Chat`⎮`DialogType.Announcement`⎮`DialogType.Visitor`*, id: *`string`*): `void`




*Defined in [Api.ts:676](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L676)*



打开会话框
*__platform__*: *

*__deprecated__*: 使用openDialog代替

*__alias__*: openDialog



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [DialogParams](../interfaces/_protocol_.dialogparams.md)⎮`DialogType.GroupChat`⎮`DialogType.Chat`⎮`DialogType.Announcement`⎮`DialogType.Visitor`   |  - |
| id | `string`   |  - |





**Returns:** `void`





___

<a id="qrcode"></a>

###  QRcode

► **QRcode**(needResult: *`boolean`*, callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)*): `void`




*Defined in [Api.ts:634](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L634)*



扫二维码
*__platform__*: `Android` | `IOS`

*__alias__*: scanQRCode

*__deprecated__*: 使用`scanQRCode`代替



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| needResult | `boolean`   |  - |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)   |  - |





**Returns:** `void`





___

<a id="addlistener"></a>

###  addListener

► **addListener**(eventType: *[EventType](../modules/_api_.md#eventtype)*, callback: *[EventCallback](../modules/_api_.md#eventcallback)*, context?: *`any`*): function




*Overrides [EventEmitter](_eventemitter_.eventemitter.md).[addListener](_eventemitter_.eventemitter.md#addlistener)*

*Defined in [Api.ts:104](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L104)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | [EventType](../modules/_api_.md#eventtype)   |  - |
| callback | [EventCallback](../modules/_api_.md#eventcallback)   |  - |
| context | `any`   |  - |





**Returns:** function





___

<a id="addmenuitem"></a>

###  addMenuItem

► **addMenuItem**(title: *`string`*, callback: *function*): `void`




*Defined in [Api.ts:802](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L802)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |
| callback | function   |  - |





**Returns:** `void`





___

<a id="addnativemenuitem"></a>

### «Private» addNativeMenuItem

► **addNativeMenuItem**(payload: *object*, callback: *function*): `void`




*Defined in [Api.ts:958](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L958)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| payload | object   |  - |
| callback | function   |  - |





**Returns:** `void`





___

<a id="apiinfos"></a>

###  apiInfos

► **apiInfos**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[APIInfosResponseOld](../interfaces/_protocol_.apiinfosresponseold.md)*): `void`

► **apiInfos**(): `Promise`.<[APIInfosResponse](../interfaces/_protocol_.apiinfosresponse.md)>




*Defined in [Api.ts:545](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L545)*



获取应用和可用API信息  
FIXME: 待测试
*__platform__*: *

*__alias__*: getList



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[APIInfosResponseOld](../interfaces/_protocol_.apiinfosresponseold.md)   |  - |





**Returns:** `void`




*Defined in [Api.ts:546](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L546)*





**Returns:** `Promise`.<[APIInfosResponse](../interfaces/_protocol_.apiinfosresponse.md)>





___

<a id="chooseimg"></a>

###  chooseImg

► **chooseImg**(params?: *[ChooseImgParams](../interfaces/_protocol_.chooseimgparams.md)*): `Promise`.<[ChooseImgResponse](../interfaces/_protocol_.chooseimgresponse.md)>

► **chooseImg**(params?: *[ChooseImgParams](../interfaces/_protocol_.chooseimgparams.md)*, callback?: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[ChooseImgResponseOld](../interfaces/_protocol_.chooseimgresponseold.md)*): `void`




*Defined in [Api.ts:693](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L693)*



选择图片
*__platform__*: *



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [ChooseImgParams](../interfaces/_protocol_.chooseimgparams.md)   |  - |





**Returns:** `Promise`.<[ChooseImgResponse](../interfaces/_protocol_.chooseimgresponse.md)>




*Defined in [Api.ts:694](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L694)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [ChooseImgParams](../interfaces/_protocol_.chooseimgparams.md)   |  - |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[ChooseImgResponseOld](../interfaces/_protocol_.chooseimgresponseold.md)   |  - |





**Returns:** `void`





___

<a id="date"></a>

###  date

► **date**(): `void`




*Defined in [Api.ts:410](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L410)*



日期选择器
*__deprecated__*: 很少使用，而且不是所有平台都支持





**Returns:** `void`





___

<a id="emit"></a>

###  emit

► **emit**(eventType: *`string`*, data?: *`any`*): `any`[]




*Inherited from [EventEmitter](_eventemitter_.eventemitter.md).[emit](_eventemitter_.eventemitter.md#emit)*

*Defined in [EventEmitter.ts:169](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/EventEmitter.ts#L169)*



触发事件

> 注意：所有回调都是被同步调用的


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  事件类型 |
| data | `any`   |  自定义数据 |





**Returns:** `any`[]
返回一个数组，表示所有订阅者回调中返回的值






___

<a id="exit"></a>

###  exit

► **exit**(): `void`




*Defined in [Api.ts:390](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L390)*



关闭web应用窗口




**Returns:** `void`





___

<a id="exitapp"></a>

###  exitApp

► **exitApp**(): `void`




*Defined in [Api.ts:402](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L402)*



关闭web应用窗口
*__platform__*: *

*__deprecated__*: 使用exit代替

*__alias__*: exit





**Returns:** `void`





___

<a id="geonavigate"></a>

###  geoNavigate

► **geoNavigate**(from: *[GeoNavigateParams](../interfaces/_protocol_.geonavigateparams.md)*, to: *[GeoNavigateParams](../interfaces/_protocol_.geonavigateparams.md)*): `void`




*Defined in [Api.ts:526](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L526)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| from | [GeoNavigateParams](../interfaces/_protocol_.geonavigateparams.md)   |  - |
| to | [GeoNavigateParams](../interfaces/_protocol_.geonavigateparams.md)   |  - |





**Returns:** `void`





___

<a id="getlanguage"></a>

###  getLanguage

► **getLanguage**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLanguageResponseOld](../interfaces/_protocol_.getlanguageresponseold.md)*): `void`

► **getLanguage**(): `Promise`.<`string`>




*Defined in [Api.ts:895](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L895)*



获取系统语言


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLanguageResponseOld](../interfaces/_protocol_.getlanguageresponseold.md)   |  回调 |





**Returns:** `void`




*Defined in [Api.ts:896](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L896)*





**Returns:** `Promise`.<`string`>





___

<a id="getlist"></a>

###  getList

► **getList**(callback: *function*): `void`




*Defined in [Api.ts:578](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L578)*



获取应用和可用API信息
*__deprecated__*: 使用`apiInfos`代替

*__alias__*: apiInfos



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  - |





**Returns:** `void`





___

<a id="getlistenerlength"></a>

###  getListenerLength

► **getListenerLength**(eventType: *`string`*): `number`




*Inherited from [EventEmitter](_eventemitter_.eventemitter.md).[getListenerLength](_eventemitter_.eventemitter.md#getlistenerlength)*

*Defined in [EventEmitter.ts:119](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/EventEmitter.ts#L119)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  - |





**Returns:** `number`





___

<a id="getloc"></a>

###  getLoc

► **getLoc**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)*): `void`




*Defined in [Api.ts:518](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L518)*



获取当前位置
*__platform__*: *

*__alias__*: getLocation

*__deprecated__*: 使用getLocation代替



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)   |  - |





**Returns:** `void`





___

<a id="getlocation"></a>

###  getLocation

► **getLocation**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)*): `void`

► **getLocation**(options: *`Partial`.<[GetLocationOptions](../interfaces/_protocol_.getlocationoptions.md)>*, callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)*): `void`

► **getLocation**(options?: *`Partial`.<[GetLocationOptions](../interfaces/_protocol_.getlocationoptions.md)>*): `Promise`.<[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)>




*Defined in [Api.ts:420](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L420)*



获取当前位置 FIXME: native 端没有错误处理
*__platform__*: `Windows` | `Android` | `IOS` | `Web`

*__alias__*: getLoc



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)   |  - |





**Returns:** `void`




*Defined in [Api.ts:421](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L421)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `Partial`.<[GetLocationOptions](../interfaces/_protocol_.getlocationoptions.md)>   |  - |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)   |  - |





**Returns:** `void`




*Defined in [Api.ts:425](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L425)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `Partial`.<[GetLocationOptions](../interfaces/_protocol_.getlocationoptions.md)>   |  - |





**Returns:** `Promise`.<[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)>





___

<a id="goback"></a>

###  goback

► **goback**(): `void`




*Defined in [Api.ts:926](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L926)*



返回到上一页， 如果是第一页，即无法回退了， 将关闭应用




**Returns:** `void`





___

<a id="hidebar"></a>

###  hideBar

► **hideBar**(): `void`




*Defined in [Api.ts:349](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L349)*



隐藏Bar PC无法隐藏Bar
*__platform__*: `Android` | `IOS`





**Returns:** `void`





___

<a id="inneraddeventlistener"></a>

### «Protected» innerAddEventListener

► **innerAddEventListener**(eventType: *`string`*, callback: *function*): function




*Defined in [Api.ts:991](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L991)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  - |
| callback | function   |  - |





**Returns:** function





___

<a id="locationto"></a>

###  locationTo

► **locationTo**(params: *[LocationToParams](../interfaces/_protocol_.locationtoparams.md)⎮`string`*): `void`




*Defined in [Api.ts:203](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L203)*



打开指定链接
*__platform__*: `Windows` | `Android` | `IOS` | `Web`

*__alias__*: url



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [LocationToParams](../interfaces/_protocol_.locationtoparams.md)⎮`string`   |  请求参数，可以是字符串或对象， showMode 为inner时以应用内webview形式打开为outer时使用系统浏览器打开, 默认为outer |





**Returns:** `void`





___

<a id="mail"></a>

###  mail

► **mail**(email: *`string`*): `void`




*Defined in [Api.ts:182](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L182)*



发送邮件
*__platform__*: `Windows` | `Android` | `IOS` | `Web`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| email | `string`   |  邮箱地址 |





**Returns:** `void`





___

<a id="once"></a>

###  once

► **once**(eventType: *`string`*, callback: *[Callback](../modules/_api_.md#callback)*, context?: *`any`*): [Disposer](../modules/_eventemitter_.md#disposer)




*Inherited from [EventEmitter](_eventemitter_.eventemitter.md).[once](_eventemitter_.eventemitter.md#once)*

*Defined in [EventEmitter.ts:115](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/EventEmitter.ts#L115)*



只订阅一次事件, 事件发生后将被移除


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  事件名 |
| callback | [Callback](../modules/_api_.md#callback)   |  回调, 回调中可以返回false将会阻止后续订阅者被执行 |
| context | `any`   |  可选，回调执行的上下文 |





**Returns:** [Disposer](../modules/_eventemitter_.md#disposer)
返回一个函数，可以用于移除事件订阅






___

<a id="opencontact"></a>

###  openContact

► **openContact**(id: *`string`*): `void`




*Defined in [Api.ts:255](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L255)*



打开名片
*__platform__*: `Windows` | `Android` | `IOS`

*__alias__*: showContact



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  用户id |





**Returns:** `void`





___

<a id="opendialog"></a>

###  openDialog

► **openDialog**(params: *[DialogParams](../interfaces/_protocol_.dialogparams.md)*): `void`




*Defined in [Api.ts:664](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L664)*



打开会话框
*__platform__*: *

*__alias__*: Dialog



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [DialogParams](../interfaces/_protocol_.dialogparams.md)   |  选项+ type: 会话类型, 1 群聊 2 单聊 3公告广播+ id: 会话ID， 群组id或个人id+ messageId: //消息记录ID |





**Returns:** `void`





___

<a id="openfile"></a>

###  openFile

► **openFile**(url: *`string`*): `Promise`.<`void`>




*Defined in [Api.ts:766](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L766)*



打开指定文件


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  文件url |





**Returns:** `Promise`.<`void`>





___

<a id="openvideo"></a>

###  openVideo

► **openVideo**(url: *`string`*, extType?: *`undefined`⎮`string`*): `void`




*Defined in [Api.ts:796](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L796)*



打开指定视频


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  文件url |
| extType | `undefined`⎮`string`   |  - |





**Returns:** `void`





___

<a id="phone"></a>

###  phone

► **phone**(callNumber: *`string`*): `void`




*Defined in [Api.ts:160](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L160)*



拨打手机
*__platform__*: `Windows` | `Android` | `IOS`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callNumber | `string`   |  手机号码 |





**Returns:** `void`





___

<a id="previewimg"></a>

###  previewImg

► **previewImg**(params: *[PreviewImgParams](../interfaces/_protocol_.previewimgparams.md)*): `Promise`.<`void`>




*Defined in [Api.ts:743](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L743)*



预览图片


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [PreviewImgParams](../interfaces/_protocol_.previewimgparams.md)   |   + url 字符串数组，需要预览的图片url + index 当前显示的图片索引 |





**Returns:** `Promise`.<`void`>





___

<a id="removealllistener"></a>

###  removeAllListener

► **removeAllListener**(eventType: *[EventType](../modules/_api_.md#eventtype)*): `number`




*Overrides [EventEmitter](_eventemitter_.eventemitter.md).[removeAllListener](_eventemitter_.eventemitter.md#removealllistener)*

*Defined in [Api.ts:129](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L129)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | [EventType](../modules/_api_.md#eventtype)   |  - |





**Returns:** `number`





___

<a id="removelistener"></a>

###  removeListener

► **removeListener**(eventType: *[EventType](../modules/_api_.md#eventtype)*, callback: *[EventCallback](../modules/_api_.md#eventcallback)*, context?: *`any`*): `boolean`




*Overrides [EventEmitter](_eventemitter_.eventemitter.md).[removeListener](_eventemitter_.eventemitter.md#removelistener)*

*Defined in [Api.ts:115](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L115)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | [EventType](../modules/_api_.md#eventtype)   |  - |
| callback | [EventCallback](../modules/_api_.md#eventcallback)   |  - |
| context | `any`   |  - |





**Returns:** `boolean`





___

<a id="removemenuitem"></a>

###  removeMenuItem

► **removeMenuItem**(title: *`string`*): `void`




*Defined in [Api.ts:814](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L814)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |





**Returns:** `void`





___

<a id="scanqrcode"></a>

###  scanQRCode

► **scanQRCode**(needResult: *`boolean`*, callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)*): `void`

► **scanQRCode**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)*): `void`

► **scanQRCode**(needResult?: *`undefined`⎮`true`⎮`false`*): `Promise`.<[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)>




*Defined in [Api.ts:591](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L591)*



扫二维码
*__platform__*: `Android` | `IOS`

*__alias__*: QRcode



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| needResult | `boolean`   |  指定是否返回结果 |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)   |  - |





**Returns:** `void`




*Defined in [Api.ts:595](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L595)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)   |  - |





**Returns:** `void`




*Defined in [Api.ts:596](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L596)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| needResult | `undefined`⎮`true`⎮`false`   |  - |





**Returns:** `Promise`.<[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)>





___

<a id="selectcontact"></a>

###  selectContact

► **selectContact**(params: *[SelectContactParams](../interfaces/_protocol_.selectcontactparams.md)*, callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[SelectContactResponse](../modules/_protocol_.md#selectcontactresponse)*): `void`

► **selectContact**(params: *[SelectContactParams](../interfaces/_protocol_.selectcontactparams.md)*): `Promise`.<[SelectContactResponse](../modules/_protocol_.md#selectcontactresponse)>




*Defined in [Api.ts:267](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L267)*



通讯录(联系人)选择器  
FIXME: 没有错误处理
*__platform__*: `Windows` | `Android` | `IOS`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [SelectContactParams](../interfaces/_protocol_.selectcontactparams.md)   |  - |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[SelectContactResponse](../modules/_protocol_.md#selectcontactresponse)   |  - |





**Returns:** `void`




*Defined in [Api.ts:271](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L271)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [SelectContactParams](../interfaces/_protocol_.selectcontactparams.md)   |  - |





**Returns:** `Promise`.<[SelectContactResponse](../modules/_protocol_.md#selectcontactresponse)>





___

<a id="selectsession"></a>

###  selectSession

► **selectSession**(params: *[SelectSessionParams](../interfaces/_protocol_.selectsessionparams.md)*, callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[SelectSessionResponseOld](../interfaces/_protocol_.selectsessionresponseold.md)*): `void`

► **selectSession**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[SelectSessionResponseOld](../interfaces/_protocol_.selectsessionresponseold.md)*): `void`

► **selectSession**(params?: *[SelectSessionParams](../interfaces/_protocol_.selectsessionparams.md)*): `Promise`.<[SelectSessionResponse](../modules/_protocol_.md#selectsessionresponse)>




*Defined in [Api.ts:850](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L850)*



用户获取会话id
*__platform__*: *



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [SelectSessionParams](../interfaces/_protocol_.selectsessionparams.md)   |  参数  + `multiple`: 表示支持多选  + `title`: 设置对话框的标题 |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[SelectSessionResponseOld](../interfaces/_protocol_.selectsessionresponseold.md)   |  回调函数 |





**Returns:** `void`




*Defined in [Api.ts:854](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L854)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[SelectSessionResponseOld](../interfaces/_protocol_.selectsessionresponseold.md)   |  - |





**Returns:** `void`




*Defined in [Api.ts:855](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L855)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [SelectSessionParams](../interfaces/_protocol_.selectsessionparams.md)   |  - |





**Returns:** `Promise`.<[SelectSessionResponse](../modules/_protocol_.md#selectsessionresponse)>





___

<a id="setbarcolor"></a>

###  setBarColor

► **setBarColor**(color: *`string`*): `void`




*Defined in [Api.ts:310](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L310)*



设置Bar颜色

> 注意：目前只支持`RGB hex`格式的颜色值， 如`#FFFFFF`
*__platform__*: `Android` | `IOS`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| color | `string`   |  颜色值 |





**Returns:** `void`





___

<a id="setbarvisible"></a>

###  setBarVisible

► **setBarVisible**(visible: *`boolean`*): `void`




*Defined in [Api.ts:323](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L323)*



设置Bar的显示和隐藏, 也可以使用`showBar`显示， `hideBar` 隐藏
*__platform__*: `Android` | `IOS`

*__see__*: showBar

*__see__*: hideBar



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| visible | `boolean`   |  - |





**Returns:** `void`





___

<a id="setnativemenuitem"></a>

###  setNativeMenuItem

► **setNativeMenuItem**(params: *[SetNativeMenuItemParams](../interfaces/_protocol_.setnativemenuitemparams.md)*): `void`




*Defined in [Api.ts:836](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L836)*



控制更多按钮菜单下的原生按钮
*__memberof__*: Api



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [SetNativeMenuItemParams](../interfaces/_protocol_.setnativemenuitemparams.md)   |  - |





**Returns:** `void`





___

<a id="settitle"></a>

###  setTitle

► **setTitle**(title: *`string`*): `void`




*Defined in [Api.ts:143](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L143)*



设置标题
*__platform__*: `Windows` | `Android` | `IOS` | `Web`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |





**Returns:** `void`





___

<a id="setupbridge"></a>

###  setUpBridge

► **setUpBridge**(callback: *function*): `void`




*Defined in [Api.ts:94](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L94)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  - |





**Returns:** `void`





___

<a id="settingbar"></a>

###  settingBar

► **settingBar**(params: *`Partial`.<[SetBarParams](../interfaces/_protocol_.setbarparams.md)>*, callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[SetBarResponseOld](../interfaces/_protocol_.setbarresponseold.md)*): `void`




*Defined in [Api.ts:361](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L361)*



设置状态栏，并监听事件
*__platform__*: `Android` | `IOS`

*__deprecated__*: 



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | `Partial`.<[SetBarParams](../interfaces/_protocol_.setbarparams.md)>   |  - |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[SetBarResponseOld](../interfaces/_protocol_.setbarresponseold.md)   |  - |





**Returns:** `void`





___

<a id="setupbeforegobackwatcher"></a>

### «Private» setupBeforeGoBackWatcher

► **setupBeforeGoBackWatcher**(): `void`




*Defined in [Api.ts:1001](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L1001)*



返回事件




**Returns:** `void`





___

<a id="setupbeforeunloadwatcher"></a>

### «Private» setupBeforeUnloadWatcher

► **setupBeforeUnloadWatcher**(): `void`




*Defined in [Api.ts:1027](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L1027)*



捕获窗口关闭事件




**Returns:** `void`





___

<a id="setupeventwatcher"></a>

### «Protected» setupEventWatcher

► **setupEventWatcher**(eventName: *`string`*, callback: *function*): `void`




*Defined in [Api.ts:95](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L95)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |
| callback | function   |  - |





**Returns:** `void`





___

<a id="setupeventwatchers"></a>

### «Private» setupEventWatchers

► **setupEventWatchers**(): `void`




*Defined in [Api.ts:980](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L980)*





**Returns:** `void`





___

<a id="shareto"></a>

###  shareTo

► **shareTo**(): `void`




*Defined in [Api.ts:649](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L649)*



分享
*__platform__*: `Android` | `IOS` TODO: 可以改进， 允许自定义分享内容





**Returns:** `void`





___

<a id="showbar"></a>

###  showBar

► **showBar**(flag?: *`undefined`⎮`true`⎮`false`*): `void`




*Defined in [Api.ts:334](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L334)*



显示Bar
*__platform__*: `Android` | `IOS` | `PC`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| flag | `undefined`⎮`true`⎮`false`   |  已废弃，兼容旧版本接口 |





**Returns:** `void`





___

<a id="showcontact"></a>

###  showContact

► **showContact**(id: *`string`*): `void`




*Defined in [Api.ts:243](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L243)*



打开名片
*__platform__*: `Windows` | `Android` | `IOS`

*__alias__*: openContact



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  用户id |





**Returns:** `void`





___

<a id="sms"></a>

###  sms

► **sms**(callNumber: *`string`*): `void`




*Defined in [Api.ts:171](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L171)*



发送消息
*__platform__*: `Android` | `IOS`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callNumber | `string`   |  手机号码 |





**Returns:** `void`





___

<a id="teardown"></a>

###  teardown

► **teardown**(): `void`




*Defined in [Api.ts:954](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L954)*





**Returns:** `void`





___

<a id="teardownbeforegobackwatcher"></a>

### «Private» teardownBeforeGoBackWatcher

► **teardownBeforeGoBackWatcher**(): `void`




*Defined in [Api.ts:1016](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L1016)*





**Returns:** `void`





___

<a id="teardownbeforeunloadwatcher"></a>

### «Private» teardownBeforeUnloadWatcher

► **teardownBeforeUnloadWatcher**(): `void`




*Defined in [Api.ts:1020](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L1020)*





**Returns:** `void`





___

<a id="teardowneventwatcher"></a>

### «Protected» teardownEventWatcher

► **teardownEventWatcher**(eventName: *`string`*): `void`




*Defined in [Api.ts:99](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L99)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |





**Returns:** `void`





___

<a id="teardowneventwatchers"></a>

### «Private» teardownEventWatchers

► **teardownEventWatchers**(): `void`




*Defined in [Api.ts:986](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L986)*





**Returns:** `void`





___

<a id="url"></a>

###  url

► **url**(params: *[LocationToParams](../interfaces/_protocol_.locationtoparams.md)*): `void`




*Defined in [Api.ts:229](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/Api.ts#L229)*



打开指定链接
*__platform__*: `Windows` | `Android` | `IOS` | `Web`

*__alias__*: locationTo

*__deprecated__*: 使用locationTo代替



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [LocationToParams](../interfaces/_protocol_.locationtoparams.md)   |  - |





**Returns:** `void`





___



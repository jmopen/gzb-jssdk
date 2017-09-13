[@gdjiami/gzb-jssdk](../README.md) > ["DesktopApi"](../modules/_desktopapi_.md) > [DesktopApi](../classes/_desktopapi_.desktopapi.md)



# Class: DesktopApi

## Hierarchy


↳  [Api](_api_.api.md)

**↳ DesktopApi**







## Index

### Properties

* [bridge](_desktopapi_.desktopapi.md#bridge)
* [isReady](_desktopapi_.desktopapi.md#isready)
* [instance](_desktopapi_.desktopapi.md#instance)


### Methods

* [Dialog](_desktopapi_.desktopapi.md#dialog)
* [QRcode](_desktopapi_.desktopapi.md#qrcode)
* [_teardownBeforeGoBackWatcher](_desktopapi_.desktopapi.md#_teardownbeforegobackwatcher)
* [_teardownBeforeUnloadWatcher](_desktopapi_.desktopapi.md#_teardownbeforeunloadwatcher)
* [addListener](_desktopapi_.desktopapi.md#addlistener)
* [apiInfos](_desktopapi_.desktopapi.md#apiinfos)
* [chooseImg](_desktopapi_.desktopapi.md#chooseimg)
* [date](_desktopapi_.desktopapi.md#date)
* [emit](_desktopapi_.desktopapi.md#emit)
* [exit](_desktopapi_.desktopapi.md#exit)
* [exitApp](_desktopapi_.desktopapi.md#exitapp)
* [getLanguage](_desktopapi_.desktopapi.md#getlanguage)
* [getList](_desktopapi_.desktopapi.md#getlist)
* [getListenerLength](_desktopapi_.desktopapi.md#getlistenerlength)
* [getLoc](_desktopapi_.desktopapi.md#getloc)
* [getLocation](_desktopapi_.desktopapi.md#getlocation)
* [hideBar](_desktopapi_.desktopapi.md#hidebar)
* [initializeBridge](_desktopapi_.desktopapi.md#initializebridge)
* [innerAddEventListener](_desktopapi_.desktopapi.md#inneraddeventlistener)
* [locationTo](_desktopapi_.desktopapi.md#locationto)
* [mail](_desktopapi_.desktopapi.md#mail)
* [once](_desktopapi_.desktopapi.md#once)
* [openContact](_desktopapi_.desktopapi.md#opencontact)
* [openDialog](_desktopapi_.desktopapi.md#opendialog)
* [phone](_desktopapi_.desktopapi.md#phone)
* [removeAllListener](_desktopapi_.desktopapi.md#removealllistener)
* [removeListener](_desktopapi_.desktopapi.md#removelistener)
* [scanQRCode](_desktopapi_.desktopapi.md#scanqrcode)
* [selectContact](_desktopapi_.desktopapi.md#selectcontact)
* [selectSession](_desktopapi_.desktopapi.md#selectsession)
* [setBarColor](_desktopapi_.desktopapi.md#setbarcolor)
* [setBarVisible](_desktopapi_.desktopapi.md#setbarvisible)
* [setTitle](_desktopapi_.desktopapi.md#settitle)
* [setUpBeforeGoBackWatcher](_desktopapi_.desktopapi.md#setupbeforegobackwatcher)
* [setUpBeforeUnloadWatcher](_desktopapi_.desktopapi.md#setupbeforeunloadwatcher)
* [setUpBridge](_desktopapi_.desktopapi.md#setupbridge)
* [settingBar](_desktopapi_.desktopapi.md#settingbar)
* [setupEventWatcher](_desktopapi_.desktopapi.md#setupeventwatcher)
* [shareTo](_desktopapi_.desktopapi.md#shareto)
* [showBar](_desktopapi_.desktopapi.md#showbar)
* [showContact](_desktopapi_.desktopapi.md#showcontact)
* [sms](_desktopapi_.desktopapi.md#sms)
* [teardown](_desktopapi_.desktopapi.md#teardown)
* [teardownEventWatcher](_desktopapi_.desktopapi.md#teardowneventwatcher)
* [url](_desktopapi_.desktopapi.md#url)
* [getInstance](_desktopapi_.desktopapi.md#getinstance)



---

## Properties
<a id="bridge"></a>

### «Private» bridge

**●  bridge**:  *[Bridge](../interfaces/_bridge_bridge_.bridge.md)* 

*Defined in [DesktopApi.ts:13](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L13)*





___

<a id="isready"></a>

###  isReady

**●  isReady**:  *`boolean`*  = false

*Inherited from [Api](_api_.api.md).[isReady](_api_.api.md#isready)*

*Defined in [Api.ts:93](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L93)*





___

<a id="instance"></a>

### «Static»«Private» instance

**●  instance**:  *[Api](_api_.api.md)* 

*Defined in [DesktopApi.ts:12](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L12)*





___


## Methods
<a id="dialog"></a>

###  Dialog

► **Dialog**(params: *[DialogParams](../interfaces/_protocol_.dialogparams.md)⎮`DialogType.GroupChat`⎮`DialogType.Chat`⎮`DialogType.Announcement`*, id: *`string`*): `void`




*Inherited from [Api](_api_.api.md).[Dialog](_api_.api.md#dialog)*

*Defined in [Api.ts:625](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L625)*



打开会话框
*__platform__*: *

*__deprecated__*: 使用openDialog代替

*__alias__*: openDialog



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [DialogParams](../interfaces/_protocol_.dialogparams.md)⎮`DialogType.GroupChat`⎮`DialogType.Chat`⎮`DialogType.Announcement`   |  - |
| id | `string`   |  - |





**Returns:** `void`





___

<a id="qrcode"></a>

###  QRcode

► **QRcode**(needResult: *`boolean`*, callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)*): `void`




*Inherited from [Api](_api_.api.md).[QRcode](_api_.api.md#qrcode)*

*Defined in [Api.ts:584](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L584)*



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

<a id="_teardownbeforegobackwatcher"></a>

### «Private» _teardownBeforeGoBackWatcher

► **_teardownBeforeGoBackWatcher**(): `void`




*Defined in [DesktopApi.ts:77](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L77)*





**Returns:** `void`





___

<a id="_teardownbeforeunloadwatcher"></a>

### «Private» _teardownBeforeUnloadWatcher

► **_teardownBeforeUnloadWatcher**(): `void`




*Defined in [DesktopApi.ts:61](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L61)*





**Returns:** `void`





___

<a id="addlistener"></a>

###  addListener

► **addListener**(eventType: *[EventType](../modules/_api_.md#eventtype)*, callback: *[EventCallback](../modules/_api_.md#eventcallback)*, context?: *`any`*): function




*Inherited from [Api](_api_.api.md).[addListener](_api_.api.md#addlistener)*

*Overrides [EventEmitter](_eventemitter_.eventemitter.md).[addListener](_eventemitter_.eventemitter.md#addlistener)*

*Defined in [Api.ts:96](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L96)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | [EventType](../modules/_api_.md#eventtype)   |  - |
| callback | [EventCallback](../modules/_api_.md#eventcallback)   |  - |
| context | `any`   |  - |





**Returns:** function





___

<a id="apiinfos"></a>

###  apiInfos

► **apiInfos**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[APIInfosResponseOld](../interfaces/_protocol_.apiinfosresponseold.md)*): `void`

► **apiInfos**(): `Promise`.<[APIInfosResponse](../interfaces/_protocol_.apiinfosresponse.md)>




*Inherited from [Api](_api_.api.md).[apiInfos](_api_.api.md#apiinfos)*

*Defined in [Api.ts:495](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L495)*



获取应用和可用API信息  
FIXME: 待测试
*__platform__*: *

*__alias__*: getList



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[APIInfosResponseOld](../interfaces/_protocol_.apiinfosresponseold.md)   |  - |





**Returns:** `void`




*Inherited from [Api](_api_.api.md).[apiInfos](_api_.api.md#apiinfos)*

*Defined in [Api.ts:496](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L496)*





**Returns:** `Promise`.<[APIInfosResponse](../interfaces/_protocol_.apiinfosresponse.md)>





___

<a id="chooseimg"></a>

###  chooseImg

► **chooseImg**(params?: *[ChooseImgParams](../interfaces/_protocol_.chooseimgparams.md)*): `Promise`.<[ChooseImgResponse](../interfaces/_protocol_.chooseimgresponse.md)>

► **chooseImg**(params?: *[ChooseImgParams](../interfaces/_protocol_.chooseimgparams.md)*, callback?: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[ChooseImgResponseOld](../interfaces/_protocol_.chooseimgresponseold.md)*): `void`




*Inherited from [Api](_api_.api.md).[chooseImg](_api_.api.md#chooseimg)*

*Defined in [Api.ts:642](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L642)*



选择图片
*__platform__*: *



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [ChooseImgParams](../interfaces/_protocol_.chooseimgparams.md)   |  - |





**Returns:** `Promise`.<[ChooseImgResponse](../interfaces/_protocol_.chooseimgresponse.md)>




*Inherited from [Api](_api_.api.md).[chooseImg](_api_.api.md#chooseimg)*

*Defined in [Api.ts:643](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L643)*



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




*Inherited from [Api](_api_.api.md).[date](_api_.api.md#date)*

*Defined in [Api.ts:389](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L389)*



日期选择器
*__deprecated__*: 很少使用，而且不是所有平台都支持





**Returns:** `void`





___

<a id="emit"></a>

###  emit

► **emit**(eventType: *`string`*, data?: *`any`*): `any`[]




*Inherited from [EventEmitter](_eventemitter_.eventemitter.md).[emit](_eventemitter_.eventemitter.md#emit)*

*Defined in [EventEmitter.ts:169](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L169)*



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




*Inherited from [Api](_api_.api.md).[exit](_api_.api.md#exit)*

*Defined in [Api.ts:369](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L369)*



关闭web应用窗口




**Returns:** `void`





___

<a id="exitapp"></a>

###  exitApp

► **exitApp**(): `void`




*Inherited from [Api](_api_.api.md).[exitApp](_api_.api.md#exitapp)*

*Defined in [Api.ts:381](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L381)*



关闭web应用窗口
*__platform__*: *

*__deprecated__*: 使用exit代替

*__alias__*: exit





**Returns:** `void`





___

<a id="getlanguage"></a>

###  getLanguage

► **getLanguage**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLanguageResponseOld](../interfaces/_protocol_.getlanguageresponseold.md)*): `void`

► **getLanguage**(): `Promise`.<`string`>




*Inherited from [Api](_api_.api.md).[getLanguage](_api_.api.md#getlanguage)*

*Defined in [Api.ts:739](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L739)*



获取系统语言


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLanguageResponseOld](../interfaces/_protocol_.getlanguageresponseold.md)   |  回调 |





**Returns:** `void`




*Inherited from [Api](_api_.api.md).[getLanguage](_api_.api.md#getlanguage)*

*Defined in [Api.ts:740](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L740)*





**Returns:** `Promise`.<`string`>





___

<a id="getlist"></a>

###  getList

► **getList**(callback: *function*): `void`




*Inherited from [Api](_api_.api.md).[getList](_api_.api.md#getlist)*

*Defined in [Api.ts:528](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L528)*



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

*Defined in [EventEmitter.ts:119](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L119)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  - |





**Returns:** `number`





___

<a id="getloc"></a>

###  getLoc

► **getLoc**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)*): `void`




*Inherited from [Api](_api_.api.md).[getLoc](_api_.api.md#getloc)*

*Defined in [Api.ts:479](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L479)*



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




*Inherited from [Api](_api_.api.md).[getLocation](_api_.api.md#getlocation)*

*Defined in [Api.ts:399](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L399)*



获取当前位置 FIXME: native 端没有错误处理
*__platform__*: `Windows` | `Android` | `IOS` | `Web`

*__alias__*: getLoc



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)   |  - |





**Returns:** `void`




*Inherited from [Api](_api_.api.md).[getLocation](_api_.api.md#getlocation)*

*Defined in [Api.ts:400](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L400)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `Partial`.<[GetLocationOptions](../interfaces/_protocol_.getlocationoptions.md)>   |  - |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)   |  - |





**Returns:** `void`




*Inherited from [Api](_api_.api.md).[getLocation](_api_.api.md#getlocation)*

*Defined in [Api.ts:404](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L404)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| options | `Partial`.<[GetLocationOptions](../interfaces/_protocol_.getlocationoptions.md)>   |  - |





**Returns:** `Promise`.<[GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)>





___

<a id="hidebar"></a>

###  hideBar

► **hideBar**(): `void`




*Inherited from [Api](_api_.api.md).[hideBar](_api_.api.md#hidebar)*

*Defined in [Api.ts:328](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L328)*



隐藏Bar
*__platform__*: `Android` | `IOS`





**Returns:** `void`





___

<a id="initializebridge"></a>

### «Private» initializeBridge

► **initializeBridge**(): `void`




*Defined in [DesktopApi.ts:83](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L83)*





**Returns:** `void`





___

<a id="inneraddeventlistener"></a>

### «Protected» innerAddEventListener

► **innerAddEventListener**(eventType: *`string`*, callback: *function*): function




*Inherited from [Api](_api_.api.md).[innerAddEventListener](_api_.api.md#inneraddeventlistener)*

*Defined in [Api.ts:791](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L791)*



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




*Inherited from [Api](_api_.api.md).[locationTo](_api_.api.md#locationto)*

*Defined in [Api.ts:189](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L189)*



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




*Inherited from [Api](_api_.api.md).[mail](_api_.api.md#mail)*

*Defined in [Api.ts:168](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L168)*



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

► **once**(eventType: *`string`*, callback: *[Callback](../modules/_bridge_desktopbridge_.md#callback)*, context?: *`any`*): [Disposer](../modules/_eventemitter_.md#disposer)




*Inherited from [EventEmitter](_eventemitter_.eventemitter.md).[once](_eventemitter_.eventemitter.md#once)*

*Defined in [EventEmitter.ts:115](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L115)*



只订阅一次事件, 事件发生后将被移除


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  事件名 |
| callback | [Callback](../modules/_bridge_desktopbridge_.md#callback)   |  回调, 回调中可以返回false将会阻止后续订阅者被执行 |
| context | `any`   |  可选，回调执行的上下文 |





**Returns:** [Disposer](../modules/_eventemitter_.md#disposer)
返回一个函数，可以用于移除事件订阅






___

<a id="opencontact"></a>

###  openContact

► **openContact**(id: *`string`*): `void`




*Inherited from [Api](_api_.api.md).[openContact](_api_.api.md#opencontact)*

*Defined in [Api.ts:241](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L241)*



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




*Inherited from [Api](_api_.api.md).[openDialog](_api_.api.md#opendialog)*

*Defined in [Api.ts:613](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L613)*



打开会话框
*__platform__*: *

*__alias__*: Dialog



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [DialogParams](../interfaces/_protocol_.dialogparams.md)   |  选项+ type: 会话类型, 1 群聊 2 单聊 3公告广播+ id: 会话ID， 群组id或个人id+ messageId: //消息记录ID |





**Returns:** `void`





___

<a id="phone"></a>

###  phone

► **phone**(callNumber: *`string`*): `void`




*Inherited from [Api](_api_.api.md).[phone](_api_.api.md#phone)*

*Defined in [Api.ts:146](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L146)*



拨打手机
*__platform__*: `Windows` | `Android` | `IOS`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callNumber | `string`   |  手机号码 |





**Returns:** `void`





___

<a id="removealllistener"></a>

###  removeAllListener

► **removeAllListener**(eventType: *[EventType](../modules/_api_.md#eventtype)*): `number`




*Inherited from [Api](_api_.api.md).[removeAllListener](_api_.api.md#removealllistener)*

*Overrides [EventEmitter](_eventemitter_.eventemitter.md).[removeAllListener](_eventemitter_.eventemitter.md#removealllistener)*

*Defined in [Api.ts:117](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L117)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | [EventType](../modules/_api_.md#eventtype)   |  - |





**Returns:** `number`





___

<a id="removelistener"></a>

###  removeListener

► **removeListener**(eventType: *[EventType](../modules/_api_.md#eventtype)*, callback: *[EventCallback](../modules/_api_.md#eventcallback)*, context?: *`any`*): `boolean`




*Inherited from [Api](_api_.api.md).[removeListener](_api_.api.md#removelistener)*

*Overrides [EventEmitter](_eventemitter_.eventemitter.md).[removeListener](_eventemitter_.eventemitter.md#removelistener)*

*Defined in [Api.ts:105](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L105)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | [EventType](../modules/_api_.md#eventtype)   |  - |
| callback | [EventCallback](../modules/_api_.md#eventcallback)   |  - |
| context | `any`   |  - |





**Returns:** `boolean`





___

<a id="scanqrcode"></a>

###  scanQRCode

► **scanQRCode**(needResult: *`boolean`*, callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)*): `void`

► **scanQRCode**(callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)*): `void`

► **scanQRCode**(needResult?: *`undefined`⎮`true`⎮`false`*): `Promise`.<[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)>




*Inherited from [Api](_api_.api.md).[scanQRCode](_api_.api.md#scanqrcode)*

*Defined in [Api.ts:541](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L541)*



扫二维码
*__platform__*: `Android` | `IOS`

*__alias__*: QRcode



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| needResult | `boolean`   |  指定是否返回结果 |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)   |  - |





**Returns:** `void`




*Inherited from [Api](_api_.api.md).[scanQRCode](_api_.api.md#scanqrcode)*

*Defined in [Api.ts:545](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L545)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)   |  - |





**Returns:** `void`




*Inherited from [Api](_api_.api.md).[scanQRCode](_api_.api.md#scanqrcode)*

*Defined in [Api.ts:546](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L546)*



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




*Inherited from [Api](_api_.api.md).[selectContact](_api_.api.md#selectcontact)*

*Defined in [Api.ts:253](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L253)*



通讯录(联系人)选择器  
FIXME: 没有错误处理
*__platform__*: `Windows` | `Android` | `IOS`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [SelectContactParams](../interfaces/_protocol_.selectcontactparams.md)   |  - |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[SelectContactResponse](../modules/_protocol_.md#selectcontactresponse)   |  - |





**Returns:** `void`




*Inherited from [Api](_api_.api.md).[selectContact](_api_.api.md#selectcontact)*

*Defined in [Api.ts:257](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L257)*



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




*Inherited from [Api](_api_.api.md).[selectSession](_api_.api.md#selectsession)*

*Defined in [Api.ts:694](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L694)*



用户获取会话id
*__platform__*: *



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [SelectSessionParams](../interfaces/_protocol_.selectsessionparams.md)   |  参数  + `multiple`: 表示支持多选  + `title`: 设置对话框的标题 |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[SelectSessionResponseOld](../interfaces/_protocol_.selectsessionresponseold.md)   |  回调函数 |





**Returns:** `void`




*Inherited from [Api](_api_.api.md).[selectSession](_api_.api.md#selectsession)*

*Defined in [Api.ts:698](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L698)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | [LegacyCallback](../modules/_protocol_.md#legacycallback)[SelectSessionResponseOld](../interfaces/_protocol_.selectsessionresponseold.md)   |  - |





**Returns:** `void`




*Inherited from [Api](_api_.api.md).[selectSession](_api_.api.md#selectsession)*

*Defined in [Api.ts:699](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L699)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| params | [SelectSessionParams](../interfaces/_protocol_.selectsessionparams.md)   |  - |





**Returns:** `Promise`.<[SelectSessionResponse](../modules/_protocol_.md#selectsessionresponse)>





___

<a id="setbarcolor"></a>

###  setBarColor

► **setBarColor**(color: *`string`*): `void`




*Inherited from [Api](_api_.api.md).[setBarColor](_api_.api.md#setbarcolor)*

*Defined in [Api.ts:296](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L296)*



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




*Inherited from [Api](_api_.api.md).[setBarVisible](_api_.api.md#setbarvisible)*

*Defined in [Api.ts:309](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L309)*



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

<a id="settitle"></a>

###  setTitle

► **setTitle**(title: *`string`*): `void`




*Inherited from [Api](_api_.api.md).[setTitle](_api_.api.md#settitle)*

*Defined in [Api.ts:129](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L129)*



设置标题
*__platform__*: `Windows` | `Android` | `IOS` | `Web`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `string`   |  - |





**Returns:** `void`





___

<a id="setupbeforegobackwatcher"></a>

### «Private» setUpBeforeGoBackWatcher

► **setUpBeforeGoBackWatcher**(callback: *function*): `void`




*Defined in [DesktopApi.ts:67](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L67)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  - |





**Returns:** `void`





___

<a id="setupbeforeunloadwatcher"></a>

### «Private» setUpBeforeUnloadWatcher

► **setUpBeforeUnloadWatcher**(callback: *function*): `void`




*Defined in [DesktopApi.ts:51](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L51)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  - |





**Returns:** `void`





___

<a id="setupbridge"></a>

###  setUpBridge

► **setUpBridge**(callback: *function*): `void`




*Overrides [Api](_api_.api.md).[setUpBridge](_api_.api.md#setupbridge)*

*Defined in [DesktopApi.ts:21](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L21)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  - |





**Returns:** `void`





___

<a id="settingbar"></a>

###  settingBar

► **settingBar**(params: *`Partial`.<[SetBarParams](../interfaces/_protocol_.setbarparams.md)>*, callback: *[LegacyCallback](../modules/_protocol_.md#legacycallback)[SetBarResponseOld](../interfaces/_protocol_.setbarresponseold.md)*): `void`




*Inherited from [Api](_api_.api.md).[settingBar](_api_.api.md#settingbar)*

*Defined in [Api.ts:340](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L340)*



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

<a id="setupeventwatcher"></a>

### «Protected» setupEventWatcher

► **setupEventWatcher**(eventName: *`string`*, callback: *function*): `void`




*Overrides [Api](_api_.api.md).[setupEventWatcher](_api_.api.md#setupeventwatcher)*

*Defined in [DesktopApi.ts:25](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |
| callback | function   |  - |





**Returns:** `void`





___

<a id="shareto"></a>

###  shareTo

► **shareTo**(): `void`




*Inherited from [Api](_api_.api.md).[shareTo](_api_.api.md#shareto)*

*Defined in [Api.ts:598](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L598)*



分享
*__platform__*: `Android` | `IOS`





**Returns:** `void`





___

<a id="showbar"></a>

###  showBar

► **showBar**(flag?: *`undefined`⎮`true`⎮`false`*): `void`




*Inherited from [Api](_api_.api.md).[showBar](_api_.api.md#showbar)*

*Defined in [Api.ts:320](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L320)*



显示Bar
*__platform__*: `Android` | `IOS`



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| flag | `undefined`⎮`true`⎮`false`   |  已废弃，兼容旧版本接口 |





**Returns:** `void`





___

<a id="showcontact"></a>

###  showContact

► **showContact**(id: *`string`*): `void`




*Inherited from [Api](_api_.api.md).[showContact](_api_.api.md#showcontact)*

*Defined in [Api.ts:229](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L229)*



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




*Inherited from [Api](_api_.api.md).[sms](_api_.api.md#sms)*

*Defined in [Api.ts:157](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L157)*



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




*Inherited from [Api](_api_.api.md).[teardown](_api_.api.md#teardown)*

*Defined in [Api.ts:776](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L776)*





**Returns:** `void`





___

<a id="teardowneventwatcher"></a>

### «Protected» teardownEventWatcher

► **teardownEventWatcher**(eventName: *`string`*): `void`




*Overrides [Api](_api_.api.md).[teardownEventWatcher](_api_.api.md#teardowneventwatcher)*

*Defined in [DesktopApi.ts:38](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L38)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventName | `string`   |  - |





**Returns:** `void`





___

<a id="url"></a>

###  url

► **url**(params: *[LocationToParams](../interfaces/_protocol_.locationtoparams.md)*): `void`




*Inherited from [Api](_api_.api.md).[url](_api_.api.md#url)*

*Defined in [Api.ts:215](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L215)*



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

<a id="getinstance"></a>

### «Static» getInstance

► **getInstance**(): [Api](_api_.api.md)




*Defined in [DesktopApi.ts:14](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/DesktopApi.ts#L14)*





**Returns:** [Api](_api_.api.md)





___



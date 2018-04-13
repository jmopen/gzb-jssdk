[@gdjiami/gzb-jssdk](../README.md) > ["protocol"](../modules/_protocol_.md)



# External module: "protocol"


Bridge 接口请求和响应协议

## Index

### Enumerations

* [DialogType](../enums/_protocol_.dialogtype.md)
* [NativeMenuItem](../enums/_protocol_.nativemenuitem.md)


### Interfaces

* [APIInfosResponse](../interfaces/_protocol_.apiinfosresponse.md)
* [APIInfosResponseOld](../interfaces/_protocol_.apiinfosresponseold.md)
* [BridgeCommonResponse](../interfaces/_protocol_.bridgecommonresponse.md)
* [ChooseImgParams](../interfaces/_protocol_.chooseimgparams.md)
* [ChooseImgResponse](../interfaces/_protocol_.chooseimgresponse.md)
* [ChooseImgResponseOld](../interfaces/_protocol_.chooseimgresponseold.md)
* [DialogParams](../interfaces/_protocol_.dialogparams.md)
* [GeoNavigateParams](../interfaces/_protocol_.geonavigateparams.md)
* [GetLanguageResponseOld](../interfaces/_protocol_.getlanguageresponseold.md)
* [GetLocationOptions](../interfaces/_protocol_.getlocationoptions.md)
* [GetLocationResponse](../interfaces/_protocol_.getlocationresponse.md)
* [LocationToParams](../interfaces/_protocol_.locationtoparams.md)
* [PreviewImgParams](../interfaces/_protocol_.previewimgparams.md)
* [QRCodeResponse](../interfaces/_protocol_.qrcoderesponse.md)
* [SelectContactParams](../interfaces/_protocol_.selectcontactparams.md)
* [SelectSessionParams](../interfaces/_protocol_.selectsessionparams.md)
* [SelectSessionResponseOld](../interfaces/_protocol_.selectsessionresponseold.md)
* [SetBarParams](../interfaces/_protocol_.setbarparams.md)
* [SetBarResponse](../interfaces/_protocol_.setbarresponse.md)
* [SetBarResponseOld](../interfaces/_protocol_.setbarresponseold.md)
* [SetNativeMenuItemParams](../interfaces/_protocol_.setnativemenuitemparams.md)


### Type aliases

* [BarButtonId](_protocol_.md#barbuttonid)
* [CoordType](_protocol_.md#coordtype)
* [ImageType](_protocol_.md#imagetype)
* [LegacyCallback](_protocol_.md#legacycallback)
* [PreviewImgResponse](_protocol_.md#previewimgresponse)
* [SelectContactResponse](_protocol_.md#selectcontactresponse)
* [SelectSessionResponse](_protocol_.md#selectsessionresponse)



---
## Type aliases
<a id="barbuttonid"></a>

###  BarButtonId

**Τ BarButtonId**:  *"close"⎮"goback"* 

*Defined in [protocol.ts:139](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/protocol.ts#L139)*





___

<a id="coordtype"></a>

###  CoordType

**Τ CoordType**:  *"WGS84"⎮"GCJ02"⎮"BD09"* 

*Defined in [protocol.ts:110](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/protocol.ts#L110)*



地图坐标类型，在中国地区，所有地图的坐标都是经过加密的, 中国地区以外都是GPS坐标

*   WGS84 是GPS坐标
*   GCJ02 是火星坐标，在中国地区，高德、GoogleMap都是使用这个格式的坐标
*   BD08 百度坐标




___

<a id="imagetype"></a>

###  ImageType

**Τ ImageType**:  *"bmp"⎮"gif"⎮"jpg"⎮"png"* 

*Defined in [protocol.ts:33](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/protocol.ts#L33)*



图片类型




___

<a id="legacycallback"></a>

###  LegacyCallback

**Τ LegacyCallback**:  *function* 

*Defined in [protocol.ts:28](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/protocol.ts#L28)*



兼容旧版的API回调函数
*__deprecated__*: 请尽量使用新版的Promise进行API调用


#### Type declaration
(res: *`R`*): `void`


*Defined in [protocol.ts:28](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/protocol.ts#L28)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| res | `R`   |  - |





**Returns:** `void`






___

<a id="previewimgresponse"></a>

###  PreviewImgResponse

**Τ PreviewImgResponse**:  *[BridgeCommonResponse](../interfaces/_protocol_.bridgecommonresponse.md)* 

*Defined in [protocol.ts:301](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/protocol.ts#L301)*





___

<a id="selectcontactresponse"></a>

###  SelectContactResponse

**Τ SelectContactResponse**:  *`Array`.<object>* 

*Defined in [protocol.ts:249](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/protocol.ts#L249)*



选择联系人响应




___

<a id="selectsessionresponse"></a>

###  SelectSessionResponse

**Τ SelectSessionResponse**:  *`Array`* 

*Defined in [protocol.ts:282](https://github.com/jmopen/gzb-jssdk/blob/c7f8f52/src/protocol.ts#L282)*



选择会话响应参数




___



[@gdjiami/gzb-jssdk](../README.md) > ["Api"](../modules/_api_.md)



# External module: "Api"


## API 接口

所有通用的接口都在这里定义，具体类`DesktopApi`和`MobileApi`, 封装了Bridge 之间的差异，即实现具体的`setUpBridge`方法

## Index

### Classes

* [Api](../classes/_api_.api.md)


### Type aliases

* [Callback](_api_.md#callback)
* [EventCallback](_api_.md#eventcallback)
* [EventType](_api_.md#eventtype)


### Functions

* [deprecatedLegacyCallback](_api_.md#deprecatedlegacycallback)
* [deprecatedTemplate](_api_.md#deprecatedtemplate)
* [parse](_api_.md#parse)


### Object literals

* [defaultChooseImageParams](_api_.md#defaultchooseimageparams)
* [defaultGetLocationOptions](_api_.md#defaultgetlocationoptions)
* [defaultSelectSessionParams](_api_.md#defaultselectsessionparams)
* [defaultSetBarParams](_api_.md#defaultsetbarparams)



---
## Type aliases
<a id="callback"></a>

###  Callback

**Τ Callback**:  *function* 

*Defined in [Api.ts:37](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L37)*


#### Type declaration
(payload: *`any`*): `any`


*Defined in [Api.ts:37](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L37)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| payload | `any`   |  - |





**Returns:** `any`






___

<a id="eventcallback"></a>

###  EventCallback

**Τ EventCallback**:  *function* 

*Defined in [Api.ts:39](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L39)*


#### Type declaration
(event: *[CustomEvent](../classes/_eventemitter_.customevent.md)*): `any`


*Defined in [Api.ts:39](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L39)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | [CustomEvent](../classes/_eventemitter_.customevent.md)   |  - |





**Returns:** `any`






___

<a id="eventtype"></a>

###  EventType

**Τ EventType**:  *"beforeunload"⎮"beforegoback"⎮"ready"* 

*Defined in [Api.ts:38](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L38)*





___


## Functions
<a id="deprecatedlegacycallback"></a>

###  deprecatedLegacyCallback

► **deprecatedLegacyCallback**(name: *`string`*): `void`




*Defined in [Api.ts:81](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L81)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** `void`





___

<a id="deprecatedtemplate"></a>

###  deprecatedTemplate

► **deprecatedTemplate**(cur: *`string`*, alias: *`string`*): `string`




*Defined in [Api.ts:77](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L77)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cur | `string`   |  - |
| alias | `string`   |  - |





**Returns:** `string`





___

<a id="parse"></a>

###  parse

► **parse**(data: *`any`*): `any`




*Defined in [Api.ts:69](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L69)*



解析bridge 返回的数据


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  - |





**Returns:** `any`





___


<a id="defaultchooseimageparams"></a>

## Object literal: defaultChooseImageParams


<a id="defaultchooseimageparams.exttype"></a>

###  extType

**●  extType**:  *`never`[]*  =  []

*Defined in [Api.ts:59](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L59)*





___
<a id="defaultchooseimageparams.maxsizekb"></a>

###  maxSizeKb

**●  maxSizeKb**:  *`number`*  = 0

*Defined in [Api.ts:60](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L60)*





___
<a id="defaultchooseimageparams.quality"></a>

###  quality

**●  quality**:  *`number`*  = 100

*Defined in [Api.ts:57](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L57)*





___
<a id="defaultchooseimageparams.targettype"></a>

###  targetType

**●  targetType**:  *`string`*  = "default"

*Defined in [Api.ts:58](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L58)*





___

<a id="defaultgetlocationoptions"></a>

## Object literal: defaultGetLocationOptions


<a id="defaultgetlocationoptions.enablehighaccuracy"></a>

###  enableHighAccuracy

**●  enableHighAccuracy**:  *`boolean`*  = true

*Defined in [Api.ts:50](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L50)*





___
<a id="defaultgetlocationoptions.maximumage"></a>

###  maximumAge

**●  maximumAge**:  *`number`*  = 0

*Defined in [Api.ts:53](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L53)*





___
<a id="defaultgetlocationoptions.prefernative"></a>

###  preferNative

**●  preferNative**:  *`boolean`*  = true

*Defined in [Api.ts:51](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L51)*





___
<a id="defaultgetlocationoptions.timeout"></a>

###  timeout

**●  timeout**:  *`number`*  =  Infinity

*Defined in [Api.ts:52](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L52)*





___

<a id="defaultselectsessionparams"></a>

## Object literal: defaultSelectSessionParams


<a id="defaultselectsessionparams.multiple"></a>

###  multiple

**●  multiple**:  *`boolean`*  = true

*Defined in [Api.ts:63](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L63)*





___

<a id="defaultsetbarparams"></a>

## Object literal: defaultSetBarParams


<a id="defaultsetbarparams.gobackurl"></a>

###  gobackUrl

**●  gobackUrl**:  *`string`*  = ""

*Defined in [Api.ts:45](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L45)*





___
<a id="defaultsetbarparams.hidemorebtn"></a>

###  hideMoreBtn

**●  hideMoreBtn**:  *`boolean`*  = false

*Defined in [Api.ts:42](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L42)*





___
<a id="defaultsetbarparams.left"></a>

###  left

**●  left**:  *`Object`*  =  ['close', 'goback']

*Defined in [Api.ts:43](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L43)*





___
<a id="defaultsetbarparams.onlycallback"></a>

###  onlyCallBack

**●  onlyCallBack**:  *`never`[]*  =  []

*Defined in [Api.ts:44](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L44)*





___
<a id="defaultsetbarparams.right"></a>

###  right

**●  right**:  *`string`*  = ""

*Defined in [Api.ts:46](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Api.ts#L46)*





___



[@gdjiami/gzb-jssdk](../README.md) > ["Bridge/DesktopBridge"](../modules/_bridge_desktopbridge_.md)



# External module: "Bridge/DesktopBridge"


Windows Bridge

## Index

### Modules

* [__global](_bridge_desktopbridge_.__global.md)


### Classes

* [DesktopBridge](../classes/_bridge_desktopbridge_.desktopbridge.md)


### Interfaces

* [RegisterHandlerOptions](../interfaces/_bridge_desktopbridge_.registerhandleroptions.md)


### Type aliases

* [Callback](_bridge_desktopbridge_.md#callback)
* [ResponseCallback](_bridge_desktopbridge_.md#responsecallback)


### Variables

* [uniqId](_bridge_desktopbridge_.md#uniqid)


### Object literals

* [defaultRegisterOptions](_bridge_desktopbridge_.md#defaultregisteroptions)



---
## Type aliases
<a id="callback"></a>

###  Callback

**Τ Callback**:  *function* 

*Defined in [Bridge/DesktopBridge.ts:10](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L10)*


#### Type declaration
(data: *`any`*, responseCallback?: *[ResponseCallback](_bridge_desktopbridge_.md#responsecallback)*): `void`


*Defined in [Bridge/DesktopBridge.ts:10](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L10)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  - |
| responseCallback | [ResponseCallback](_bridge_desktopbridge_.md#responsecallback)   |  - |





**Returns:** `void`






___

<a id="responsecallback"></a>

###  ResponseCallback

**Τ ResponseCallback**:  *function* 

*Defined in [Bridge/DesktopBridge.ts:9](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L9)*


#### Type declaration
(responseData: *`any`*): `void`


*Defined in [Bridge/DesktopBridge.ts:9](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| responseData | `any`   |  - |





**Returns:** `void`






___


## Variables
<a id="uniqid"></a>

###  uniqId

**●  uniqId**:  *`number`*  = 0

*Defined in [Bridge/DesktopBridge.ts:39](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L39)*





___


<a id="defaultregisteroptions"></a>

## Object literal: defaultRegisterOptions


<a id="defaultregisteroptions.afterreceived"></a>

###  afterReceived

**●  afterReceived**:  *[identity](_utils_.md#identity)*  =  identity

*Defined in [Bridge/DesktopBridge.ts:42](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L42)*





___
<a id="defaultregisteroptions.preservename"></a>

###  preserveName

**●  preserveName**:  *`boolean`*  = false

*Defined in [Bridge/DesktopBridge.ts:43](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L43)*





___
<a id="defaultregisteroptions.beforesend"></a>

###  beforeSend

► **beforeSend**(data: *`any`*): `undefined`⎮`string`




*Defined in [Bridge/DesktopBridge.ts:41](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L41)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  - |





**Returns:** `undefined`⎮`string`





___



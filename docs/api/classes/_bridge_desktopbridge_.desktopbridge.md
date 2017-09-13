[@gdjiami/gzb-jssdk](../README.md) > ["Bridge/DesktopBridge"](../modules/_bridge_desktopbridge_.md) > [DesktopBridge](../classes/_bridge_desktopbridge_.desktopbridge.md)



# Class: DesktopBridge

## Index

### Methods

* [addCallback](_bridge_desktopbridge_.desktopbridge.md#addcallback)
* [addListener](_bridge_desktopbridge_.desktopbridge.md#addlistener)
* [callCallback](_bridge_desktopbridge_.desktopbridge.md#callcallback)
* [callClientHandler](_bridge_desktopbridge_.desktopbridge.md#callclienthandler)
* [deprecatedRegisterHandler](_bridge_desktopbridge_.desktopbridge.md#deprecatedregisterhandler)
* [emit](_bridge_desktopbridge_.desktopbridge.md#emit)
* [registerBridgeHandler](_bridge_desktopbridge_.desktopbridge.md#registerbridgehandler)
* [registerHandler](_bridge_desktopbridge_.desktopbridge.md#registerhandler)
* [removeListener](_bridge_desktopbridge_.desktopbridge.md#removelistener)
* [getInstance](_bridge_desktopbridge_.desktopbridge.md#getinstance)
* [getNormalizedBridge](_bridge_desktopbridge_.desktopbridge.md#getnormalizedbridge)



---


## Methods
<a id="addcallback"></a>

###  addCallback

► **addCallback**(handlerName: *`string`*, responseCallback: *[ResponseCallback](../modules/_bridge_desktopbridge_.md#responsecallback)*, id?: *`string`*): `string`




*Defined in [Bridge/DesktopBridge.ts:143](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L143)*



保存回调函数，以便给Bridge进行回调


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| handlerName | `string`  | - |   处理器名 |
| responseCallback | [ResponseCallback](../modules/_bridge_desktopbridge_.md#responsecallback)  | - |   回调 |
| id | `string`  |  &#x60;cb_${handlerName}_${uniqId++}&#x60; |   唯一id |





**Returns:** `string`





___

<a id="addlistener"></a>

###  addListener

► **addListener**(handlerName: *`string`*, callback: *[Callback](../modules/_bridge_desktopbridge_.md#callback)*): `(Anonymous function)`




*Defined in [Bridge/DesktopBridge.ts:114](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L114)*



添加订阅者


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handlerName | `string`   |  - |
| callback | [Callback](../modules/_bridge_desktopbridge_.md#callback)   |  - |





**Returns:** `(Anonymous function)`





___

<a id="callcallback"></a>

###  callCallback

► **callCallback**(id: *`string`*, data: *`any`*): `void`




*Defined in [Bridge/DesktopBridge.ts:157](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L157)*



调用使用addCallback保存的回调, 这个主要被Bridge调用


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| data | `any`   |  - |





**Returns:** `void`





___

<a id="callclienthandler"></a>

###  callClientHandler

► **callClientHandler**(handlerName: *`string`*, data: *`any`*, responseCallback: *[ResponseCallback](../modules/_bridge_desktopbridge_.md#responsecallback)*): `void`




*Defined in [Bridge/DesktopBridge.ts:235](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L235)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handlerName | `string`   |  - |
| data | `any`   |  - |
| responseCallback | [ResponseCallback](../modules/_bridge_desktopbridge_.md#responsecallback)   |  - |





**Returns:** `void`





___

<a id="deprecatedregisterhandler"></a>

###  deprecatedRegisterHandler

► **deprecatedRegisterHandler**(handlerName: *`string`*, handler: *[Callback](../modules/_bridge_desktopbridge_.md#callback)*): `this`




*Defined in [Bridge/DesktopBridge.ts:227](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L227)*



只为了兼容 openMail 这个接口
*__deprecated__*: 



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handlerName | `string`   |  - |
| handler | [Callback](../modules/_bridge_desktopbridge_.md#callback)   |  - |





**Returns:** `this`





___

<a id="emit"></a>

###  emit

► **emit**(handlerName: *`string`*, data: *`any`*, responseCallback: *[ResponseCallback](../modules/_bridge_desktopbridge_.md#responsecallback)*): `void`




*Defined in [Bridge/DesktopBridge.ts:94](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L94)*



通知订阅者


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handlerName | `string`   |  Handler 名 |
| data | `any`   |  是准备发送给Bridge的数据 |
| responseCallback | [ResponseCallback](../modules/_bridge_desktopbridge_.md#responsecallback)   |  - |





**Returns:** `void`





___

<a id="registerbridgehandler"></a>

### «Private» registerBridgeHandler

► **registerBridgeHandler**(handlerName: *`string`*, handler: *[Callback](../modules/_bridge_desktopbridge_.md#callback)*): `void`




*Defined in [Bridge/DesktopBridge.ts:249](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L249)*



用于注册一个订阅者，这个订阅者将在调用this.emit时立即调用。 这里的订阅者主要用于 向Bridge发送消息


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handlerName | `string`   |  Handler名 |
| handler | [Callback](../modules/_bridge_desktopbridge_.md#callback)   |  回调 |





**Returns:** `void`





___

<a id="registerhandler"></a>

###  registerHandler

► **registerHandler**S,R(handlerName: *`string`*, options?: *`Partial`.<[RegisterHandlerOptions](../interfaces/_bridge_desktopbridge_.registerhandleroptions.md)`S`, `R`>*): `this`




*Defined in [Bridge/DesktopBridge.ts:175](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L175)*



注册一个Handler, 用于向Bridge 发送消息


**Type parameters:**

#### S 
#### R 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| handlerName | `string`  | - |   Handler 名 |
| options | `Partial`.<[RegisterHandlerOptions](../interfaces/_bridge_desktopbridge_.registerhandleroptions.md)`S`, `R`>  |  {} |   选项+ beforeSend: 在发送之前对数据进行预处理, 默认使用JSON.stringify转换为字符串，注意Bridge只接受字符串+ afterReceived: 在调用回调之前，对Bridge返回的数据进行转换+ preserveName: 是否对HandlerName进行转换，按照规范转换为 On<Name>形式， 不过一些接口没有安装规范来, 通过设置这个接口为true，避免转换HandlerName， 默认为false |





**Returns:** `this`





___

<a id="removelistener"></a>

###  removeListener

► **removeListener**(handlerName: *`string`*, callback: *[Callback](../modules/_bridge_desktopbridge_.md#callback)*): `void`




*Defined in [Bridge/DesktopBridge.ts:127](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L127)*



移除订阅者


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handlerName | `string`   |  - |
| callback | [Callback](../modules/_bridge_desktopbridge_.md#callback)   |  - |





**Returns:** `void`





___

<a id="getinstance"></a>

### «Static» getInstance

► **getInstance**(): [DesktopBridge](_bridge_desktopbridge_.desktopbridge.md)




*Defined in [Bridge/DesktopBridge.ts:59](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L59)*



获取单例实例
*__static__*: 





**Returns:** [DesktopBridge](_bridge_desktopbridge_.desktopbridge.md)





___

<a id="getnormalizedbridge"></a>

### «Static» getNormalizedBridge

► **getNormalizedBridge**(): [Bridge](../interfaces/_bridge_bridge_.bridge.md)




*Defined in [Bridge/DesktopBridge.ts:69](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L69)*



返回规范化的bridge 对象




**Returns:** [Bridge](../interfaces/_bridge_bridge_.bridge.md)





___



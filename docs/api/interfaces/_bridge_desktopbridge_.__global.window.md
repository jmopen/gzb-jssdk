[@gdjiami/gzb-jssdk](../README.md) > ["Bridge/DesktopBridge"](../modules/_bridge_desktopbridge_.md) > [__global](../modules/_bridge_desktopbridge_.__global.md) > [Window](../interfaces/_bridge_desktopbridge_.__global.window.md)



# Interface: Window


## Methods
<a id="handleevent"></a>

###  HandleEvent

► **HandleEvent**(handlerName: *`string`*, data: *`any`*, callbackId?: *`undefined`⎮`string`*): `void`




*Defined in [Bridge/DesktopBridge.ts:35](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L35)*



这是Bridge 提供的主要接口，用于调用Bridge的Handle TODO data是什么类型


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| handlerName | `string`   |  Handler 名 |
| data | `any`   |  传输的数据 |
| callbackId | `undefined`⎮`string`   |  回调函数ID，Bridge在完成操作后会通过window.exeCallback来调用回调。不是所有Handler的回调都会被触发，取决于PC端的实现 |





**Returns:** `void`





___

<a id="execallback"></a>

###  exeCallback

► **exeCallback**(data: *`any`*, id: *`string`*): `void`




*Defined in [Bridge/DesktopBridge.ts:26](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/DesktopBridge.ts#L26)*



这是Bridge 调用回调的接口


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  Bridge 返回的数据 |
| id | `string`   |  回调id |





**Returns:** `void`





___



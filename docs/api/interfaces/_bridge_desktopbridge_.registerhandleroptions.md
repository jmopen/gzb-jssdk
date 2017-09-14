[@gdjiami/gzb-jssdk](../README.md) > ["Bridge/DesktopBridge"](../modules/_bridge_desktopbridge_.md) > [RegisterHandlerOptions](../interfaces/_bridge_desktopbridge_.registerhandleroptions.md)



# Interface: RegisterHandlerOptions

## Type parameters
#### S 
#### R 

## Properties
<a id="afterreceived"></a>

###  afterReceived

**●  afterReceived**:  *function* 

*Defined in [Bridge/DesktopBridge.ts:13](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/Bridge/DesktopBridge.ts#L13)*


#### Type declaration
(data: *`R`*): `any`


*Defined in [Bridge/DesktopBridge.ts:13](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/Bridge/DesktopBridge.ts#L13)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `R`   |  - |





**Returns:** `any`






___

<a id="beforesend"></a>

###  beforeSend

**●  beforeSend**:  *function* 

*Defined in [Bridge/DesktopBridge.ts:12](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/Bridge/DesktopBridge.ts#L12)*


#### Type declaration
(data: *`S`*): `string`⎮`undefined`


*Defined in [Bridge/DesktopBridge.ts:12](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/Bridge/DesktopBridge.ts#L12)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `S`   |  - |





**Returns:** `string`⎮`undefined`






___

<a id="bridgehandlename"></a>

### «Optional» bridgeHandleName

**●  bridgeHandleName**:  *`undefined`⎮`string`* 

*Defined in [Bridge/DesktopBridge.ts:15](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/Bridge/DesktopBridge.ts#L15)*





___

<a id="preservename"></a>

###  preserveName

**●  preserveName**:  *`boolean`* 

*Defined in [Bridge/DesktopBridge.ts:14](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/Bridge/DesktopBridge.ts#L14)*





___



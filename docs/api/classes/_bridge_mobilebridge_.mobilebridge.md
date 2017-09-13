[@gdjiami/gzb-jssdk](../README.md) > ["Bridge/MobileBridge"](../modules/_bridge_mobilebridge_.md) > [MobileBridge](../classes/_bridge_mobilebridge_.mobilebridge.md)



# Class: MobileBridge

## Index

### Methods

* [setUpBridge](_bridge_mobilebridge_.mobilebridge.md#setupbridge)
* [getInstance](_bridge_mobilebridge_.mobilebridge.md#getinstance)



---


## Methods
<a id="setupbridge"></a>

###  setUpBridge

► **setUpBridge**(callback: *function*): `void`




*Defined in [Bridge/MobileBridge.ts:31](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/MobileBridge.ts#L31)*



## 初始化桥接

IOS 端基于[`marcuswestin/WebViewJavascriptBridge`](https://github.com/marcuswestin/WebViewJavascriptBridge#usage) Android 端基于[`lzyzsd/JsBridge`](https://github.com/lzyzsd/JsBridge)
*__example__*:     this.setUpBridge((bridge) => {
      bridge.callHandler('type', 'payload', (response) => {...})
    })



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  提供一个回调用户获取桥接对象 |





**Returns:** `void`





___

<a id="getinstance"></a>

### «Static» getInstance

► **getInstance**(): [MobileBridge](_bridge_mobilebridge_.mobilebridge.md)




*Defined in [Bridge/MobileBridge.ts:11](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/Bridge/MobileBridge.ts#L11)*





**Returns:** [MobileBridge](_bridge_mobilebridge_.mobilebridge.md)





___



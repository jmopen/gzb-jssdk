[@gdjiami/gzb-jssdk](../README.md) > ["EventEmitter"](../modules/_eventemitter_.md) > [EventEmitter](../classes/_eventemitter_.eventemitter.md)



# Class: EventEmitter


事件订阅器和发送器
*__example__*:     import { EventEmitter } from 'gzb-jssdk'

    const emitter = new EventEmitter()
    emitter.addListener('foo', data => {
      console.log('foo event emitted', data)
    })

    emitter.emit('foo', 'bar')
    // => foo event emitted bar


## Hierarchy

**EventEmitter**

↳  [Api](_api_.api.md)








## Index

### Methods

* [addListener](_eventemitter_.eventemitter.md#addlistener)
* [emit](_eventemitter_.eventemitter.md#emit)
* [getListenerLength](_eventemitter_.eventemitter.md#getlistenerlength)
* [once](_eventemitter_.eventemitter.md#once)
* [removeAllListener](_eventemitter_.eventemitter.md#removealllistener)
* [removeListener](_eventemitter_.eventemitter.md#removelistener)



---

## Methods
<a id="addlistener"></a>

###  addListener

► **addListener**(eventType: *`string`*, callback: *[Callback](../modules/_eventemitter_.md#callback)*, context?: *`any`*, once?: *`boolean`*): [Disposer](../modules/_eventemitter_.md#disposer)




*Defined in [EventEmitter.ts:87](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/EventEmitter.ts#L87)*



添加订阅者


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| eventType | `string`  | - |   事件名 |
| callback | [Callback](../modules/_eventemitter_.md#callback)  | - |   回调, 回调中可以返回false将会阻止后续订阅者被执行 |
| context | `any`  | - |   可选，回调执行的上下文 |
| once | `boolean`  | false |   - |





**Returns:** [Disposer](../modules/_eventemitter_.md#disposer)
返回一个函数，可以用于移除事件订阅






___

<a id="emit"></a>

###  emit

► **emit**(eventType: *`string`*, data?: *`any`*): `any`[]




*Defined in [EventEmitter.ts:169](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/EventEmitter.ts#L169)*



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

<a id="getlistenerlength"></a>

###  getListenerLength

► **getListenerLength**(eventType: *`string`*): `number`




*Defined in [EventEmitter.ts:119](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/EventEmitter.ts#L119)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  - |





**Returns:** `number`





___

<a id="once"></a>

###  once

► **once**(eventType: *`string`*, callback: *[Callback](../modules/_eventemitter_.md#callback)*, context?: *`any`*): [Disposer](../modules/_eventemitter_.md#disposer)




*Defined in [EventEmitter.ts:115](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/EventEmitter.ts#L115)*



只订阅一次事件, 事件发生后将被移除


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  事件名 |
| callback | [Callback](../modules/_eventemitter_.md#callback)   |  回调, 回调中可以返回false将会阻止后续订阅者被执行 |
| context | `any`   |  可选，回调执行的上下文 |





**Returns:** [Disposer](../modules/_eventemitter_.md#disposer)
返回一个函数，可以用于移除事件订阅






___

<a id="removealllistener"></a>

###  removeAllListener

► **removeAllListener**(eventType: *`string`*): `number`




*Defined in [EventEmitter.ts:128](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/EventEmitter.ts#L128)*



移除指定事件所有订阅者


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  - |





**Returns:** `number`
返回被移除的订阅者数量






___

<a id="removelistener"></a>

###  removeListener

► **removeListener**(eventType: *`string`*, callback: *[Callback](../modules/_eventemitter_.md#callback)*, context?: *`any`*): `boolean`




*Defined in [EventEmitter.ts:144](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/EventEmitter.ts#L144)*



移除订阅者


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| eventType | `string`   |  - |
| callback | [Callback](../modules/_eventemitter_.md#callback)   |  - |
| context | `any`   |  - |





**Returns:** `boolean`
返回boolean值，表示是否从队列中被删除






___



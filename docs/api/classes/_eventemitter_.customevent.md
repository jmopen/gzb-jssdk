[@gdjiami/gzb-jssdk](../README.md) > ["EventEmitter"](../modules/_eventemitter_.md) > [CustomEvent](../classes/_eventemitter_.customevent.md)



# Class: CustomEvent


自定义事件对象构造器

## Index

### Constructors

* [constructor](_eventemitter_.customevent.md#constructor)


### Properties

* [cancelable](_eventemitter_.customevent.md#cancelable)
* [eventPrevented](_eventemitter_.customevent.md#eventprevented)
* [returnValue](_eventemitter_.customevent.md#returnvalue)
* [timeStamp](_eventemitter_.customevent.md#timestamp)
* [type](_eventemitter_.customevent.md#type)


### Accessors

* [defaultPrevented](_eventemitter_.customevent.md#defaultprevented)


### Methods

* [preventDefault](_eventemitter_.customevent.md#preventdefault)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new CustomEvent**(type: *`string`*, eventInit?: *`Partial`.<[EventInit](../interfaces/_eventemitter_.eventinit.md)>*): [CustomEvent](_eventemitter_.customevent.md)



*Defined in [EventEmitter.ts:41](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L41)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string`   |  - |
| eventInit | `Partial`.<[EventInit](../interfaces/_eventemitter_.eventinit.md)>   |  - |





**Returns:** [CustomEvent](_eventemitter_.customevent.md)

---


## Properties
<a id="cancelable"></a>

###  cancelable

**●  cancelable**:  *`boolean`*  = false

*Defined in [EventEmitter.ts:29](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L29)*



事件是否可以取消， 即可以通过eventPreventDefault()取消默认行为




___

<a id="eventprevented"></a>

### «Private» eventPrevented

**●  eventPrevented**:  *`boolean`*  = false

*Defined in [EventEmitter.ts:38](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L38)*



标志时间是否被取消




___

<a id="returnvalue"></a>

###  returnValue

**●  returnValue**:  *`any`* 

*Defined in [EventEmitter.ts:34](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L34)*





___

<a id="timestamp"></a>

###  timeStamp

**●  timeStamp**:  *`number`*  =  Date.now()

*Defined in [EventEmitter.ts:33](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L33)*



事件产生时的时间戳




___

<a id="type"></a>

###  type

**●  type**:  *`string`* 

*Defined in [EventEmitter.ts:25](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L25)*



事件类型




___


## Accessors
<a id="defaultprevented"></a>

###  defaultPrevented


getdefaultPrevented(): `boolean`


*Defined in [EventEmitter.ts:39](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L39)*





**Returns:** `boolean`



___


## Methods
<a id="preventdefault"></a>

###  preventDefault

► **preventDefault**(): `void`




*Defined in [EventEmitter.ts:51](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/EventEmitter.ts#L51)*



取消默认行为




**Returns:** `void`





___



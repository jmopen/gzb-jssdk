[@gdjiami/gzb-jssdk](../README.md) > ["utils"](../modules/_utils_.md)



# External module: "utils"


帮助方法

## Index

### Type aliases

* [Predicate](_utils_.md#predicate)


### Variables

* [process](_utils_.md#process)


### Functions

* [baseFindIndex](_utils_.md#basefindindex)
* [bigStringTransform](_utils_.md#bigstringtransform)
* [dateFormat](_utils_.md#dateformat)
* [debug](_utils_.md#debug)
* [deprecated](_utils_.md#deprecated)
* [findIndex](_utils_.md#findindex)
* [identity](_utils_.md#identity)
* [noop](_utils_.md#noop)
* [outOfChina](_utils_.md#outofchina)
* [parseDate](_utils_.md#parsedate)
* [upperFirst](_utils_.md#upperfirst)
* [warn](_utils_.md#warn)



---
## Type aliases
<a id="predicate"></a>

###  Predicate

**Τ Predicate**:  *function* 

*Defined in [utils.ts:179](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L179)*


#### Type declaration
(item: *`D`*, index: *`number`*, array: *`D`[]*): `boolean`


*Defined in [utils.ts:179](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L179)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| item | `D`   |  - |
| index | `number`   |  - |
| array | `D`[]   |  - |





**Returns:** `boolean`






___


## Variables
<a id="process"></a>

###  process

**●  process**:  *object* 

*Defined in [utils.ts:7](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L7)*


#### Type declaration


env: object





NODE_ENV: "production"⎮"development"







___


## Functions
<a id="basefindindex"></a>

###  baseFindIndex

► **baseFindIndex**D(array: *`D`[]*, predicate: *[Predicate](_utils_.md#predicate)`D`*, fromIndex: *`number`*, fromRight: *`boolean`*): `number`




*Defined in [utils.ts:181](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L181)*



**Type parameters:**

#### D 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| array | `D`[]   |  - |
| predicate | [Predicate](_utils_.md#predicate)`D`   |  - |
| fromIndex | `number`   |  - |
| fromRight | `boolean`   |  - |





**Returns:** `number`





___

<a id="bigstringtransform"></a>

###  bigStringTransform

► **bigStringTransform**(arg: *`any`*): `any`




*Defined in [utils.ts:16](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L16)*



转换JSON结构中的大字符串，避免输出到控制台时卡死


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| arg | `any`   |  - |





**Returns:** `any`





___

<a id="dateformat"></a>

###  dateFormat

► **dateFormat**(date?: *`Date`⎮`number`⎮`string`*, format?: *`string`*, inSecond?: *`boolean`*): `string`




*Defined in [utils.ts:127](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L127)*



获取格式化后的日期


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| date | `Date`⎮`number`⎮`string`  |  new Date() |   - |
| format | `string`  | &quot;YYYY-MM-DD&quot; |   - |
| inSecond | `boolean`  | false |   - |





**Returns:** `string`







___

<a id="debug"></a>

###  debug

► **debug**(...args: *`any`[]*): `void`




*Defined in [utils.ts:41](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L41)*



代替console.log, 这个函数只有在`process.env.NODE_ENV`为`true`时输出到终端


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| args | `any`[]   |  - |





**Returns:** `void`





___

<a id="deprecated"></a>

###  deprecated

► **deprecated**R(desc: *`string`*, wrapped: *function*, context?: *`undefined`⎮`object`*): function

► **deprecated**(desc: *`string`*): `void`




*Defined in [utils.ts:60](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L60)*



输出deprecated 警告


**Type parameters:**

#### R 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| desc | `string`   |  - |
| wrapped | function   |  - |
| context | `undefined`⎮`object`   |  - |





**Returns:** function




*Defined in [utils.ts:65](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L65)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| desc | `string`   |  - |





**Returns:** `void`





___

<a id="findindex"></a>

###  findIndex

► **findIndex**D(array: *`D`[]*, predicate: *[Predicate](_utils_.md#predicate)`D`*, fromIndex?: *`number`*): `number`




*Defined in [utils.ts:204](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L204)*



查找指定item的index, 如果未找到则返回-1


**Type parameters:**

#### D 
**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| array | `D`[]  | - |   数组 |
| predicate | [Predicate](_utils_.md#predicate)`D`  | - |   判断函数 |
| fromIndex | `number`  | 0 |   - |





**Returns:** `number`







___

<a id="identity"></a>

###  identity

► **identity**T(i: *`T`*): `T`




*Defined in [utils.ts:80](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L80)*



**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| i | `T`   |  - |





**Returns:** `T`





___

<a id="noop"></a>

###  noop

► **noop**(): `void`




*Defined in [utils.ts:79](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L79)*





**Returns:** `void`





___

<a id="outofchina"></a>

###  outOfChina

► **outOfChina**(latitude: *`number`*, longitude: *`number`*): `boolean`




*Defined in [utils.ts:169](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L169)*



用户判断是否是中国地区，所有地图产品的坐标再中国地区经过转换加密的
*__export__*: 



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| latitude | `number`   |  纬度 |
| longitude | `number`   |  经度 |





**Returns:** `boolean`





___

<a id="parsedate"></a>

###  parseDate

► **parseDate**(date: *`Date`⎮`number`⎮`string`*, inSecond?: *`boolean`*): `Date`




*Defined in [utils.ts:93](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L93)*



解析日期


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| date | `Date`⎮`number`⎮`string`  | - |   支持数字，数字字符串, 日期字符串， Date实例 |
| inSecond | `boolean`  | false |   是否是秒， 一般后端返回的都是秒为单位的 |





**Returns:** `Date`





___

<a id="upperfirst"></a>

###  upperFirst

► **upperFirst**(str: *`string`*): `string`




*Defined in [utils.ts:84](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L84)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string`   |  - |





**Returns:** `string`





___

<a id="warn"></a>

###  warn

► **warn**(...args: *`any`[]*): `void`




*Defined in [utils.ts:51](https://github.com/GDJiaMi/gzb-jssdk/blob/6a995d9/src/utils.ts#L51)*



代替console.warn, 这个函数只有在`process.env.NODE_ENV`为`true`时输出到终端


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| args | `any`[]   |  - |





**Returns:** `void`





___



[@gdjiami/gzb-jssdk](../README.md) > ["protocol"](../modules/_protocol_.md) > [ChooseImgParams](../interfaces/_protocol_.chooseimgparams.md)



# Interface: ChooseImgParams


选择图片请求参数


## Properties
<a id="actiontype"></a>

### «Optional» actionType

**●  actionType**:  *"default"⎮"camera"⎮"gallery"* 

*Defined in [protocol.ts:55](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/protocol.ts#L55)*



操作类型， camera 打开相机， gallery打开相册. 默认为default，弹出一个actionsheet， 由 * 用户自主选择




___

<a id="exttype"></a>

### «Optional» extType

**●  extType**:  *[ImageType](../modules/_protocol_.md#imagetype)[]* 

*Defined in [protocol.ts:59](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/protocol.ts#L59)*



图片扩展类型




___

<a id="maxsizekb"></a>

### «Optional» maxSizeKb

**●  maxSizeKb**:  *`undefined`⎮`number`* 

*Defined in [protocol.ts:63](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/protocol.ts#L63)*



最大体积， 单位为kb




___

<a id="quality"></a>

### «Optional» quality

**●  quality**:  *`undefined`⎮`number`* 

*Defined in [protocol.ts:42](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/protocol.ts#L42)*



图片质量，1 - 100




___

<a id="target"></a>

### «Optional» target

**●  target**:  *`undefined`⎮`number`* 

*Defined in [protocol.ts:46](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/protocol.ts#L46)*



设置缩放后的边大小




___

<a id="targettype"></a>

### «Optional» targetType

**●  targetType**:  *"default"⎮"width"⎮"height"* 

*Defined in [protocol.ts:50](https://github.com/GDJiaMi/gzb-jssdk/blob/38ff667/src/protocol.ts#L50)*



设置target应用到的边, 默认为default




___



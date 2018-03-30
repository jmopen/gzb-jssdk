# GZB JSSDK(v1)

<p align="center">
 <img src="data:image/png;base64,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" alt="logo"></img>
 <br/>
</p>

工作宝JSSDK, 是[工作宝APP](https://www.mygzb.com/)面向web应用提供的开发工具包， 
用于在工作宝应用的webview内调用APP 服务. 目前支持`PC`, `Android`, `IOS`平台。

通过这些接口可以实现选择图片，获取当前位置，分享，拨打电话， 发送短信，打开工作宝应用对话框等功能，
提升工作宝嵌入应用的网页体验

## 安装

```
yarn add @gdjiami/gzb-jssdk
```

或者
```
npm install @gdjiami/gzb-jssdk --save
```

## 接口协议
[GZB-JSSDK-SPECS](https://github.com/jmopen/gzb-jssdk/blob/master/specs.md)

## DEMO
[GZB-JSSDK-DEMO](https://gdjiami.github.io/gzb-jssdk-demo/index.html#/)

## API文档
+ [Api](https://github.com/jmopen/gzb-jssdk/blob/master/docs/api/classes/_api_.api.md)
+ [MobileApi](https://github.com/jmopen/gzb-jssdk/blob/master/docs/api/classes/_mobileapi_.mobileapi.md)
+ [Device](https://github.com/jmopen/gzb-jssdk/blob/master/docs/api/classes/_devicedetector_.devicedector.md)
+ [Protocal](https://github.com/jmopen/gzb-jssdk/blob/master/docs/api/modules/_protocol_.md)

## 使用
基本使用

```typescript
import Api, { BridgeResponseError } from '@gdjiami/gzb-jssdk'
const api = api()

// 简单接口
api.setTitle('hello gzb')

```

UMD版本
```html
<script src="path/to/gzb-jssdk.umd.js"></script>
<script>
  var api = GZB.api()
  api.setTitle('hello gzb')
</script>
```

异步回调接口

```typescript
async function chooseImage() {
  try {
    // 接口返回Promise， 所有可以配合使用async/await 编写更加简洁的异步代码
    const { width, height, name, quality, dataUrl } = await api.chooseImage({
      quality: 80
    })
    preview(dataUrl)
  } catch(error: BridgeResponseError) {
    console.log(error.errCode, error.message)
  }
}
```

事件接口, 工作宝JSSDK， 目前支持两种类型的事件， `beforeunload`和`beforegoback`，
分别对应原生窗口中的关闭和返回按钮. 

**beforeunload**: beforeunload 事件类似于浏览器端的beforeunload 事件，你可以通过返回字符串来弹出一个确认框,
如果用户点击确认就会退出应用。
```typescript
api.addListener('beforeunload', event => {
  return 'Are Sure to exit?'
})
```

你也可以通过返回false，会调用`event.preventDefault()` 来阻止默认行为。 需要注意的是返回
false 还会阻止后续订阅者的调用.

```typescript
api.addListener('beforeunload', event => {
  event.preventDefault()
  myCustomConfirm('确认退出', () => {
    saveSomething()
    api.exit()
  })
})
```

> 事件接口目前有较为严重的问题，当你开发的是单页应用， 可以考虑使用这些接口。如果是多页应用，
> 由于原生Bridge绑定原有的回调，当切换页面后，会导致绑定事件的按钮失效。详见[已知问题](#known-issues)
> 解决这个问题的暂时方法是使用`api.locationTo` 来进行网站导航

用户代理检测

```typescript
import { Device } from '@gdjiami/gzb-jssdk'

if (Device.mobile()) {
  // is mobile
} else if (Device.tablet()) {
  // is tablet
} else {
  // is desktop
}
```

## 兼容性

1.0 版本使用`Typescript`重写，依然兼容旧的接口，只不过**只在**`umd`压缩版本中提供，文件为`dist/gzb-jssdk.umd.js`,  可以
通过script标签进行导入 ：

```html
<script src="path/to/gzb-jssdk.umd.js"></script>
<script>
// 接口调用
var api = customApi.init()
api.setTitle('hello')
api.chooseImg({
  quality: 80,
  targetType: 'width',
  target: 700,
}, function(res) {
  if (res.result === 'true') {
    // 调用成功
    // 预览图片
    preview(res.imgData)
  } else {
    console.log(res.errCode, errMsg)
  }
})

// 用户代理检测
var detector =  window.JH.Detector
detector.Android()
detector.isMobile()
detector.IOS()
// ...
</script>
```

> 注意：旧版接口将在下一大版本中移除，不要将他们用在新项目中。详见[CHANGELOG](./CHANGELOG)

> JSSDK 依赖于Promise，你需要确保你的环境支持Promise

[旧版文档入口](https://gdjiami.github.io/gzb-jssdk-legacy/api.html)


<h2 id="known-issues">已知问题</h2>

+ `setBar` 不能应用于多页应用，如果在当前页面绑定了close和goback事件， 当跳转到其他页面时，close，goback按钮将会失效, 因为没办法找到原来的回调，所以目前只建议在单页应用只使用`api.addListener('beforeunload')` 和`api.addListener('beforegoback')`
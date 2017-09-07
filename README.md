# GZB JSSDK(v1)

<p align="center">
 <img src="https://www.mygzb.com/static/css/20170524/img/logo.jpg"/ alt="logo"></img>
 <br/>
</p>

工作宝JSSDK, 是[工作宝APP](https://www.mygzb.com/)面向网页开发者提供的开发工具包， 
用于在工作宝应用的webview内调用APP 服务. 目前支持`PC`, `Android`, `IOS`平台。

通过这些接口可以实现选择图片，获取当前位置，分享，拨打电话， 发送短信，打开工作宝应用对话框等功能，
提升工作宝嵌入应用的网页体验

## 安装

## 使用
基本使用

```typescript
import Api, { BridgeResponseError } from 'gzb-jssdk'
const api = api()

// 简单接口
api.setTitle('hello gzb')

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

用户代理检测

```typescript
import { Device } from 'gzb-jssdk'

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

[旧版文档入口](https://gdjiami.github.io/gzb-jssdk-legacy/api.html)

<h2 id="known-issues">已知问题</h2>

+ `setBar` 不能应用于多页应用，如果在当前页面绑定了close和goback事件， 当跳转到其他页面时，close，goback按钮将会失效, 因为没办法找到原来的回调，所以目前只建议在单页应用只使用`api.addListener('beforeunload')` 和`api.addListener('beforegoback')`
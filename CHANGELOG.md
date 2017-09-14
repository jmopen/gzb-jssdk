# ChangeLog

## 1.0

2017-09-14

### 重大变化

+ 使用Typescript重构
+ 所有接口都Promise化， 同时向下兼容旧版的callback接口，callback形式方法，将在下一个版本移除.
+ 重命名和规范化部分接口


### 新增接口

* 事件接口
  + `addListener('beforeunload', callback)` 订阅关闭按钮点击事件
  + `addListener('beforegoback', callback)` 订阅返回按钮点击事件
  + `addListener('ready', callback)` 订阅bridge初始化完成事件
  + `removeListener(eventName, callback)` 取消事件订阅
* 状态栏相关方法(Mobile)
  + `setBarVisible()` 替换旧的`showBar()`
  + `showBar()` 为`setBarVisible(true)`的简写
  + `hideBar()` 为`setBarVisible(false)`的简写
  + `setMoreButtonVisible()`, `getMoreButtonVisible`
  + `setBackButtonVisible()`, `getBackButtonVisible`
  + `setCloseButtonVisible()`, `setCloseButtonVisible`
* `locationTo()` 替换旧的`url()`
* `exit()` 取代旧的`exitApp()`
* `getLocation()` 取代旧的`getLoc()`
* `openContact()` 为`showContact()`的别名
* `scanQRCode()` 取代旧的`QRcode()`
* `openDialog()` 取代旧的`Dialog()`
* `goback()` 返回上一页
* `Device()` 设备侦测接口
* `EventEmitter` 观察者模式实现

### 废弃的接口(不要在新项目中使用)
* `settingBar()` 使用状态栏相关方法取代��
* `date()`
* `getList()`
* `webApp()*` 可以直接使用locationTo取代
* `picView()`
* `url()`
* `exitApp()`
* `getLoc()`
* `QRcode()`
* `Dialog()`

---
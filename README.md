![logo](./logo.jpg)
# GZB JSSDK 
工作宝JSSDK, 应用于工作宝应用webview内调用APP 服务.

## 安装

## 文档

## 已知问题
+ `setBar` 不能应用于多页应用，如果在当前页面绑定了close和goback事件， 当跳转到其他页面时，close，goback按钮将会失效,
 因为没办法找到原来的回调，所以目前只建议在单页应用只使用`api.addListener('beforeunload')` 和`api.addListener('beforegoback')`

# jh-ts-boilerplate
Typescript 库模板

## 目录结构
```
├─src   # Typescript源代码目录
├─lib   # Typescript 编译输出目录
├─doc   # 文档目录
| └─api # 自动生成的API文档
├─dist  # npm 分发目录
└─test  # 测试用例
```

## 使用
```
git clone <当前项目> my-project
cd my-project && yarn setup
```

## CLI
+ watch:     TODO
+ test:      TODO
+ build:     编译文件，输出在dist, 并且生成API文档
+ build:doc: 生成API文档
+ prettier:  格式化源代码
+ lint:      使用TSLint 检查代码 
+ clean:     清理编译输出

## License
[MIT](./LICENSE)
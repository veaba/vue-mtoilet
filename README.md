# 仿造马桶MT 官方vue项目，仅供学习参考！
## 声明
> 严重声明！我是本着学习的目的，复刻该项目，以下说明仅仅是针对代码来阐释，如果措辞不当，伤害了人，请告诉我，里面删除不得当的地方。
我也仅仅是娱乐一下，参考学习而已，如果后续衍生其他负面影响，在此提前说一句：对不住！一时没忍住，打扰了。

## 如何使用
> 基于 vue cli@3.0 构建的项目
- 安装依赖
> npm install 

- 启动项目(开发环境下)
> npm run serve

- 如果要build，最好使用nginx 做代理
> npm run build

## 剖析
> 仿照马桶MT 官网 vue项目。说实话，复刻完这个项目，我都不想去碰它了，这压根是实习生写的，如果不是，觉得是学习vue不到一个星期，不过从这一点来讲，还是算比较优秀的吧。

> 本着学习的目的，我还是尽量从里面找到一些优势点，供给大家学习参考。
- 该项目使用的是vue项目，看起来时2.0构建的？main.js的写法，让我没办法一下子在vue cli 3.0下构建成功，还要手动改下
- 由于马桶MT官网开发者，可能是新手，导致build 之后，sourceMap暴露出来，源码暴露，我以前也犯过，自己找到自己修复。
- PC一套css、Mobile 一套css，吐槽，scss 了解下，好久没写css，各种复制css难受
- 马桶MT官网开发者，难道不注意控制台的vue警告吗？你created之后 `this.width` 给data 是闹哪样？data还是空的，vue响应式原理，了解下吧。。
- 另外，作者，最后忍不住一句。你的css 水平就是 `实习生`，`滑稽`,帮你修复了很多语法错误了。。。
- 作者使用了flex 布局，虽然兼容性不是都能全都接受，但也是大势所趋，使用的还是挺好的。
- 建议用一下webStorm，我是靠着它很快发现各种css 语法错误的
- 这后端并发有点渣了吧。。。

## 这个项目适合新手和尝鲜者
- 可以学习flex
- pc 和mobile 的兼容方式，该项目使用的是两套css
- vue 开发一个响应式网站，生产一套
- 等等

## 关于如何fix这个项目源码泄漏 `我已fix`
- 造成build下，项目源码泄漏原因是sourceMap没关
```js
// vue cli v2.0下，src/config/index.js
module.exports={
	build:{
		productionSourceMap:false//false 即可
	}
}
// vue cli v3.0下,vue.config.js
module.exports={
	productionSourceMap:false,//这样
}
```

## 后记
@veaba  2019年1月15日16:16:10
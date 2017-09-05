# fqq-backend

> 我的另一个项目[fqq](https://github.com/tadashi-chen/fqq)，其后台部分与开发环境写在一块了，所以本项目作为生产环境的后台部分，本项目也是基于我的另一个express的[项目](https://github.com/tadashi-chen/express-demo)。

前端部分打包后生成的文件根据路径放进来即可，后端的代码也只有`router.js`与`sqlite.js`两个文件，放进来即可，其中`router.js`里面有个地方根据相对路径寻找`index.html`文件，改下路径即可。

```bash
#安装依赖
$ npm i

#启动项目，手动打开http://localhost:4000/#/
$ node index.js
```

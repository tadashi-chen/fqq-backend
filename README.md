# fqq-server

> 我的另一个项目[fqq](https://github.com/wscj/fqq)，其后台部分与开发环境写在一块了，所以本项目作为生产环境的后台部分，本项目也是基于我的另一个express的[项目](https://github.com/wscj/express-demo)。

**前端部分** 打包后生成的文件`index.html`与文件夹`static`，根据路径分别放于根目录与`assets`目录下即可。

**后端部分** 后端的核心文件只有`router.js`与`sqlite.js`这两个，放置于`src`目录下，前后端共用的js文件放置于`src/assets/js/common`中

注： 这里的前后端代码都没有保持实时更新，最新以[fqq](https://github.com/wscj/fqq)为准，拷贝过来即可。

```bash
#安装依赖
$ npm i

#启动项目，手动打开http://localhost:4000/#/
$ node index.js
```

一个基于`Next.js`开发的简单静态网站。

### 项目依赖：

* `React` 版本：16.10
* `typescript` 版本：3.6
* `material-ui` 版本：4.5

### 启动命令：

##### 开发模式

`yarn dev`
或者
`npm run dev`

##### 生产模式

```
yarn build
yarn start
```

或者

```
npm run build
npm run start
```


### update 2019-10-18

##### CDN 前缀修饰，请修改 `next.config.js` 配置。

```
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : ''
}
```

> Note：Next.js在运行脚本、导出静态文件时会注入前缀，但不会影响 `/static` 文件夹下的静态资源；

#### 可通过修改 `next.config.js` 文件中的 `publicRuntimeConfig` 或 `serverRuntimeConfig`（仅限Server端）配置，实现 `/static` 文件夹下的静态资源路径修饰。

```
// next.config.js
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}
```



 

Thanks!!!

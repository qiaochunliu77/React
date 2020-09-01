## SPA 客户端渲染
    vue/react -> webpack -> html/css/js
    html -> <div></div>
    等js把所有的 内容渲染到 root里面去
    用户不能第一时间看到最有价值的内容（白屏事件长）
    问题：
    1. 页面的DOM完全由js来渲染，使得大部分搜索引擎无法爬取渲染后真实的DOM，不利于SEO。
    2. 页面的首屏内容到达时间强依赖于js静态资源的加载（因为DOM的渲染由js来执行），使得在网络越差的情况下，白屏时间大幅上升。

## SSR 服务端渲染    
    vue/react -> webpack -> 
    优化：1. 减少白屏时间过长的问题
        2. 单页应用SPA因
    移动端一般不会使用服务器端渲染(/)
    dev:start": "nodemon --watch build --exec node ./build/bundle.js",监听node启动
    "dev:build:server": "webpack --config ./webpack.server.js --watch",监听服务端打包
    "dev:build:client": "webpack --config ./webpack.client.js --watch"

### 同构组件
1. 服务端bulid/bundle.js 是一个node项目
2. 客户端public/index.js 静态资源 
3. node服务会让 react 组件 通过 renderToString 渲染成html字符串
4. node 返回的东西就是带有内容的字符串 缩短首屏白屏事件 
5. node返回 html 结构，也把客户端的index.js 返回给浏览器， 让react组件在客户端也会渲染一次 ，绑定事件
让一份代码既可以在服务端运行又可以在客户端运行 

### 同构路由
1. 前后端拿到的url都是一样的，需要根据当前的url，渲染页面
2. 客户端用BrowserRouter 
3. 服务端用staticRouter 手动传 req.url 
4. 让页面两端都知道 用户正在访问的url  两端渲染出来的页面都是一样的 
5. 鼠标点击Link 刷新地址栏 这两个行为属于？？ 服务端渲染？页面由谁构造出来的


## MPA


## 创建项目
- 创建一个react脚手架
-   create-react-app hello-react
    cd 
    npm i -g yarn
    yarn start
    npm run start

1. node 包管理器 
    npm
    cnpm 
    yarn facebook
2. create-react-app hello-react
3. npm run start 
    npm run 运营一个在pakage.json

- react JSX语法 将网页 模块化开发 分离
    函数 返回 html片段 Conponent
    1. es6 import /  export 
    2. 每个模块写一个函数 函数的返回值是 JXS
- 用react做项目 七天 UI 不再是dom 而是组件
- 新的UI(html,css,js) 开发思想


- tabber loading 过程在干什么

1. react react-dom 花时间加载 js执行
2. MVVM能力组件化 
3. JSX 编译 ->
4. webpack 打包工具 

- 组件思想 把开发当成搭积木
 你要做什么事情，接下来CommentApp 
 CommentInput
 CommentList    
    Comment

- react 是新的前端开发框架 ， 还是新的思想
- DOM api 过时 性能低下
  CommentList .js 动态添加的评论 appendChild
  1. component 组件树 虚拟DOm树 有父组件 子组件 props state
  2. props 传参
  3. state 自由状态 setstate 用到相应状态的组件 会自动刷新 响应式开发


  文章列表
  组件 组合html css js 新的自定义标签 <Postapp>
  PostApp
    Tab
        Tabitem
    PostList
        Post
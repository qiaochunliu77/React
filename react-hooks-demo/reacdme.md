1. tsx 工作流
.tsx react组件 -> webpack.config.js -> awesome-typescript -> tsconfig.json -> typescript .jsx -> babelrc(polyfill +env plugin 装饰器模式 ) -> react Dom -> webpack-dev-server html-webpack-plugin footer script bundle.js 
react react-dom react-scripts
2. 最烦的是什么？
    react-scripts 约定
3. hooks特色
    useEffect
        生命周期 依赖 
    useState
        Object...
    useCallback
    useRef
    useMemo
    useReducer
    useContext 当数据传输超过父子组件 就用context
4. 分析react如何运行起来
    jsx
    root 根
    JSX编译的过程
    正则<(.+)>...</>-
        节点的类型 标签节点\
        组件 递归
        <></>
        文本节点（递归的退出条件）

5. 在做项目时遇到的问题
- 文档 api
- 互相尊重 极客范 用最新最稳定的技术
- useRef解决闭包的副作用问题
- 接口数据还没有加载完成 用户提前退出，报错


1. tsx 工作流
.tsx react组件 -> webpack.config.js -> awesome-typescript -> tsconfig.json -> typescript .jsx -> babelrc(polyfill +env plugin 装饰器模式 ) -> react Dom -> webpack-dev-server html-webpack-plugin footer script bundle.js 

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
4. 分析react如何运行起来
    jsx
    root 根
    JSX编译的过程
    正则<(.+)>...</>
        节点的类型 标签节点\
        组件 递归
        <></>
        文本节点（递归的退出条件）







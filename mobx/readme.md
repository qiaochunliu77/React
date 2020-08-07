class setState -> 父子组件props  + props调用 -> context -> redux useReducer
1. 当数据流动层次超过两层， 简单的useState传起来太麻烦了
而redux reducer太重，如果action可以忽略useContext
useState React.createContext结合 数据模板+实际操作
2. reducer 函数是灵魂 
redux 企业级的数据状态安全流程及架构
- state 读可以 -
- state 写 dispatch action -> reducer -> 旧新状态的切换
- reducer 只要type是相同的 那么一定会从一个状态去到下一个确定的状态
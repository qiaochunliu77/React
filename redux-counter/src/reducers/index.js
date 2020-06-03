// redeucer n个函数 返回状态的纯函数
// 初始状态state = 0
// 在那一刻 一定有唯一的状态对应我们的组件
// action 是改变状态的动作 如ajax、事件 
// {type:"INCREMENT"}
// dispatch 一个{type:"INCREMENT"} action 只要一个状态改变了 其它的都变  =》 响应式编程
export default (state = 0, action) => {
    // action store.dispatch({ type: 'INCREMENT' }
    console.log(action,'----------------')
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state //初始状态
    }
}
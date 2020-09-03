let action1 = {
    type: 'INCREMENT'
}
let action2 = {
    type: 'DECREMENT'
}
//   reducer 纯函数  action纯对象 通过传入的action的改变来决定对数据的修改
function reducer(state = 1, action) {
    if (action.type === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
}
// redux优点 
// 单向数据流将状态修改
// 其中含有函数式编程的概念 
let store = createStore(reducer);
store.dispatch(action1)
console.log(store.getState())
// redux-thunk

function createStore(reducer) {
    let state ;// 1

    function dispatch(action) {
        state = reducer(state, action);
    }
    dispatch({ type: 'njczaqswdecfvrb' });//生成默认state
    function getState() {
        return state
    }
    return {
        dispatch, getState
    }
}

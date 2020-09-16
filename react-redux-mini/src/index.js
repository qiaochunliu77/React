import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider, connect } from './react-redux.js'

let action1 = {
  type: 'INCREMENT'
}
let action2 = {
  type: 'DECREMENT'
}
function reducer(state = 1, action) {
  if (action.type === 'INCREMENT') {
    console.log('jia111')
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}
let store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* provider 提供数据生产者 Comsumer使用数据 消费者  ？？ */}
    {/* react-redux的provider  是对react原生的provider的包装  */}
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';

// 数据管理模式
// 创建中央仓库 数据管理的架构 
// createStore comments 放在中央仓库
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// 数据就放到仓库里 跟组件没有依赖关系
import CommentApp from './containers/CommentApp';
import commentsReducer from './reducers/comments';
// 仓库 单一 状态树 
const store = createStore(commentsReducer);

ReactDOM.render (
  <Provider store = {store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
)
// react-router react-redux
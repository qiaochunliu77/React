import React from 'react';
import ReactDOM from 'react-dom';  //index.js  入口文件 负责缝合关系
import CommentApp from './CommentApp';
// css in js -> webpack 
import './index.css';

// jsx -> 在js中写 xml
ReactDOM.render(
    // react 组件 的世界 
    <CommentApp/>,
    // 真实的dom 
    document.getElementById('root')
)
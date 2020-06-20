import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 可变
// 在函数式编程中 可变是万恶之源
let obj = {}
let obj1 = obj;
let obj2 = obj1;

obj1.name = 123; //本意是修改一下obj1 但是却影响了obj2 obj副作用
console.log(obj)

// 不可变  
let newobj = {}
let obj3 = {
  ...newobj
}
obj3.name = 123;
console.log(obj3,newobj)  //没有任何副作用
// 组件state
// redux state 要求不可变 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

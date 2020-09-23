import React from 'react';
import ReactDOM from 'react-dom';

// react 链表 
// preact 数组
let hooks = [];
let currentIndex = 0;// 当前组件用到的所有hook 闭包里面的变量
const useState = (function () {
  return function (initValue) {
    // currentIndex 组件里 hooks调用的顺序
    // 不能出现在任何的逻辑判断里面 if语句 
    // 1useState 2if() {useState} 3useState()
    // [[state, setState],[],[]]
    if (!hooks[currentIndex]) hooks[currentIndex] = [];//该索引不存在就初始化为一个数组
    let hookstate = hooks[currentIndex];
    hooks[currentIndex][0] = hookstate[0] || initValue;//等于上一次的值 或者 初始值
    function setState(newState) {
      hookstate[0] = newState;
      render()
    }
    hookstate[1] = setState;
    currentIndex++;
    return hookstate;
  }
})()
// const useState = (function () {
//   let _state ;
//   return function (initValue) {
//     _state = _state || initValue;
//     function setState(newState) {
//       _state = newState;
//       render(); 
//     }
//     return [_state, setState]
//   }
// })()

function App() {
  const [time, setTime] = useState(4);
  const [count, setCount] = useState(0); // 记住上一次的count
  // count 因为useState的执行 难道不应该是0嘛 
  // 闭包 0 接受到放到闭包里 
  let c = 0; // 重新声明 会为0
  return (
    <div>
      {count}
      {time}
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setTime(time + 1)}> + </button>
    </div>
  )
}
render()
function render() {
  currentIndex = 0;
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

}

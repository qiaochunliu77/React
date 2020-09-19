import React from 'react';
import ReactDOM from 'react-dom';

const useState = (function () {
  let _state;
  return function (initValue) {
    function setState(newState) {
      _state = newState;
      render(); 
    }
    return [_state, setState]
  }
})()
function App() {
  const [count, setCount] = useState(0); // 记住上一次的count
  // count 因为useState的执行 难道不应该是0嘛 
  // 闭包 0 接受到放到闭包里 
  let c  = 0; // 重新声明 会为0
  return (
    <div>
      { count }
      <button onClick = {() => setCount(count+1)}> + </button>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


import React, { useState } from 'react';
// useState之前 组件class function
// useState 官方定义的hook 函数组件内部定义 state 
// useDrag 自己定义出来的
function useDrag() {
    // const state = {
    //   left: 0,
    //   top: 0
    // }
    // const [a, b] = [{left:0, top: 0}, () => {}]
    
    const [state, setState] = useState({
      left: 0,
      top: 0
    })
    var handleDown= (e) => {
      var startX = e.clientX;
      var startY = e.clientY;
      let obj = e.target.getBoundingClientRect();
      // 重置起点
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleUp);
    }
    var handleMove = (e) => {
      var newX = e.clientX;
      var newY = e.clientY;
      const diffX = newX;
      const diffY = newY;
      setState({
        left: diffX,
        top: diffY
      })
    }
    var handleUp = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    }
    // parseUrl
    return {
      left: state.left,
      top: state.top,
      handleDown
    }
  }
function DDrag1() {
    // 使用hook
    const { left, top, handleDown } = useDrag();
    return (
        <div style={{left, top}} 
        onMouseDown={handleDown}
        className='dragable'>
            DDrag1
        </div>
    )  
}
export const Drag1 = DDrag1;
export default useDrag;
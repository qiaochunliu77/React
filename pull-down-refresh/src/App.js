import React, { useEffect, useRef } from 'react';
import pullToRefresh from './pullDown'
import './App.css';

const { init } = pullToRefresh()

function App() {
  const contentRef = useRef();
  const ptrRef = useRef();
  const bodyRef = useRef();
  
    useEffect(() => {
      init({
        bodyEl: bodyRef,
        contentEl: contentRef.current,
        ptrEl: ptrRef.current,
        loadingFunction: () => new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          },3000)
        })
      })
    }, [])

  return (
    <div ref={bodyRef} className='body-wrap'>

      {/* 负责移动 */}
      <div ref={ptrRef} className='ptr-wrap'>
        {/* 负责动画 */}
        <div className="loading"></div>
      </div>

      <div ref={contentRef} className='content-wrap'>111111111</div>
    </div>
  );
}

export default App;

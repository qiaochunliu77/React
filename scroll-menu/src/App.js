import React, { useState, useEffect, useRef } from 'react';
import './App.css';
const data = {
  tab1: [
    { c: "1-1" },
    { c: "1-2" },
    { c: "1-3" },
    { c: "1-4" },
    { c: "1-5" },
    { c: "1-6" }
  ],
  tab2: [
    { c: "2-1" },
    { c: "2-2" },
    { c: "2-3" },
    { c: "2-4" },
    { c: "2-5" },
    { c: "2-6" }
  ],
  tab3: [
    { c: "3-1" },
    { c: "3-2" },
    { c: "3-3" },
    { c: "3-4" },
    { c: "3-5" },
    { c: "3-6" },
    { c: "3-7" }
  ],
  tab4: [
    { c: "4-1" },
    { c: "4-2" },
    { c: "4-3" },
    { c: "4-4" },
    { c: "4-5" },
    { c: "4-6" },
    { c: "4-7" }
  ]
};
let base = 0, ranges = [];
function App() {
  const [ activeIndex,setactiveIndex] = useState(0)
  const tabClick = (e) => {
    const ltab = e.target.getAttribute('data-ltab')
    const activeIndex = e.target.getAttribute('data-index')
    console.log(ltab, activeIndex);
    setactiveIndex(parseInt(activeIndex));
    //Element.scrollIntoView() 方法让当前的元素滚动到浏览器窗口的可视区域内。
    // 渲染后执行某些操作
    const rtab = document.querySelector(`[data-rtab="${ltab}"]`);
    rtab.scrollIntoView({
      behavior:'smooth'
    })
  }
  const navs = Object.keys(data);
  const ref = useRef(); //拿到dom节点

  // 只执行一次
  // useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  // 每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。
  // React 会在组件卸载的时候执行清除操作。
  useEffect(() =>{
    const tabDetail = ref.current;
    const tabs = tabDetail.querySelectorAll(`[data-rtab]`);
    console.log(tabs,'-------------')
    for(let tab of tabs){
      let h = tab.getBoundingClientRect().height;
      let newH = base + h;
      ranges.push([base, newH]);
      base = newH;
    }
    console.log(ranges,'00000000000000')  //获取到每个tab的高度区间
    function onscroll (e) {
      const scrollTop = tabDetail.scrollTop;
      console.log(scrollTop,'+++++++++++++=')
      // < ? <
      const index = ranges.findIndex(range => scrollTop >= range[0] && scrollTop < range[1]);
      setactiveIndex(index); //加类名
    }
    tabDetail.addEventListener('touchstart', () => {
      tabDetail.addEventListener('scroll', onscroll);
    })
    tabDetail.addEventListener('touchend', () => {
      tabDetail.removeEventListener('scroll', onscroll);
    })
    // onMouseDown 绑定
    // omMouseUp 移除
  },[])

  return (
    <div className='linkage'>
      <nav className=''>
        {
          navs.map((nav, index) => {
            return (
              <div key={index}
                data-ltab={nav}
                data-index={index}
                onClick={tabClick}
                className={activeIndex === index ? 'active' : ''}
              >{nav}</div>
            )
          })
        }
      </nav>

      <div className='tab-detail' ref={ref}>
        {
          navs.map((nav, index) => {
            return (
              <dl key={index} data-rtab={nav}>
                <dt >{nav}</dt>
                {
                  data[nav].map((con, j) => {
                    return (
                      <dd key={j}>
                        {con.c}
                      </dd>
                    )
                  })
                }
              </dl>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

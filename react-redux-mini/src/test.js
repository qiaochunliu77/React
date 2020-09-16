
// 请在下方作答:
// 以下代码为一个Clock组件，请将该组件根据以下要求改造：
// 1、将class组件修改为function组件。
// 2、将逻辑与UI分开。要求是：新增一个useClock.js文件，将Clock.js中的逻辑封装到useClock.js中去，要求使用标准的hook写法，并最后在Clock.js中使用useClock。
// 3、优化showTime()方法。
// 按照题目要求完成以下2个js文件：
// 文件1：Clock.js
// Clock.js
// Clock.js
// import React from 'react';

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   showTime() {
//     const day = this.state.date.getDay();
//     let dayStr;
//     if (day === 0) {
//       dayStr = '星期日';
//     } else if (day === 1) {
//       dayStr = '星期一';
//     } else if (day === 2) {
//       dayStr = '星期二';
//     } else if (day === 3) {
//       dayStr = '星期三';
//     } else if (day === 4) {
//       dayStr = '星期四';
//     } else if (day === 5) {
//       dayStr = '星期五';
//     } else if (day === 6) {
//       dayStr = '星期六';
//     }
//     return dayStr + this.state.date.toLocaleTimeString();
//   }

//   render() {
//     return <div>{this.showTime()}</div>;
//   }
// }

// export default Clock;


import React, { useState, useEffect, useMemo, useRef } from 'react';
// 逻辑
let obj = {
  0: '星期日', 5: '星期五'
}
function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer);
    }
  }, [])
  let dateStr = useMemo(() => {
    let day = date.getDay();
    return `${obj[day]}${date.toLocaleTimeString()}`
  }, [date])
  return dateStr;
}
/*
function CLock() {
  let count = 0 ;
  setInterval(() => {
    count+1
  },1000)
}
function CLock() {
  let count = 0 ;
  setInterval(() => {
    count+1
  },1000)
}
 为了提高性能，react将setState设置为分批次更新 
  setState 在react库的控制下是异步的
  其他情况(原生js控制)是同步的 

 capture value
 state每一次都会形成一个快照 
 每一次拿不到的新的count
 拿到的只是当时的count 前一次的不能保存 
 问题 永远拿不到新的state
 解决 :拿到上一次的值 
 1. setcount (回调函数) 每次都能拿到上一次的
 2. 把定时器清除
 3. ref.cuurent
 
*/
function Clock() {
  const [count, setCount] = useState(0);
  const ref = useRef();
  ref.current = count;// 每次能在useEffect外部拿到最新的state
  const date = useClock();
  console.log(count, '00000000000')
  useEffect(() => {
    let time = setInterval(() => {
      // setCount(count + 1)
      setCount(c => c+1)
      // setCount(ref.current + 1)
    }, 1000)
    return () => {
      clearInterval(time)
    }
  }, [])
  return (
    <div>
      {count} <br />
      {date} <br/>
    </div>
  )
}
export default Clock;
// export default useClock;


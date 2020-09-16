import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { context, connect } from './react-redux.js'
import Clock from './test';


function App(props) {
  // context ??
  // 之前 connect -> mapStatetoProps 
  // 现在 useSelector from reactredux
  // const context1 = useContext(context)

  React.useEffect(() => {
    setTimeout(() => {
      // 
      props.inc()
    }, 1000)

  }, [])
  console.log(props.count)
  return (
    <div className="App">
      哈哈哈哈哈哈
      {props.count}
      <Clock></Clock>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({ type: 'INCREMENT' }),
    dec: () => dispatch({ type: 'DECREMENT' })
  }
}
const mapStateToProps = (state) => {
  return {
    count: state
  }
  // this.props.count
}
/*
1. 拿到mapSatteToprops的返回值()
2. 返回值放到 <App ...props/>
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);

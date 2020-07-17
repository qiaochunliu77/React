import React, { useCallback, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import { connect } from 'react-redux';
import Journey from './components/journey/Journey'
import { bindActionCreators, } from 'redux';
import {
  exchangeFromTo
} from './store/action'

function App(props) {
  console.log(props);
  const {
    from,
    to,
    dispatch
  } = props;
  const onBack = useCallback(() => {
    window.history.back();
  }, [])
  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo
    }, dispatch)
  }, [])
  
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form action="./query.html" className="form">
        <Journey from={from} to={to} {...cbs} />
      </form>
    </div>

  );
}

export default connect(function mapStateToProps(state) {
  // 状态的读操作
  return state;
}, function mapStateToProps(dispatch) {
  return {
    dispatch
  }
})(App)
// export default App;

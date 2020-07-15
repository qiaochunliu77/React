import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='header'>
        <h2>LOGO</h2>
        <input type="text" placeholder='搜索商品，共33990款好物'/>
        <button>登录</button>
      </div>
      <div className="app"></div>
    </div>
  );
}

export default App;

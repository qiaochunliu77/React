import React from 'react';
import './App.css';
import './font/iconfont.css'
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Main from './Pages/Main/index';
import Home from './Pages/Home/index'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path = '/main'  component = {Main}/>
    </BrowserRouter>
    
  );
}

export default App;

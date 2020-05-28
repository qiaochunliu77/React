import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './page/Home/index';
import Create from './page/Create/index';
import Main from './page/Main/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path = '/main' exact component = {Main}/>
        <Route path="/"  component={Home}/>
        <Route path="/create" component={Create}/>
      </BrowserRouter>
    );
  }
}

export default App;
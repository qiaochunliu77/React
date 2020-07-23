import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import PrivateRoute from './privateRoute';
import Collect from './Collect';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
      <Route path='/login' component={Login} />
      <PrivateRoute path='/collect' component={Collect} />
    </BrowserRouter>
  );
}

export default App;

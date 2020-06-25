import React from 'react';
import { Provider } from 'mobx-react';
import articleStore from './store/articleStore'
import logo from './store/articleStore';
import Home from './pages/home';
import './App.css';
import './util/request.js'

const store = {
  articleStore
}
function App() {
 return (
   <Provider {...store}>
     <Home />
   </Provider>
 )
}

export default App;

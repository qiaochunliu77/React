import React from 'react';
import { fromJS } from 'immutable';
import ImmutableComponent from './components/common';
import { BrowserRouter, Route  } from 'react-router-dom';
import { Provider } from 'react-redux';
import './util/request.js'
import store from './store/index';
import Header from './components/Header';
import Home from './pages/home/index';
import Detail from './pages/detail/index';


class App extends ImmutableComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Route path="/" component={Home} exact/>
            <Route path="/detail" component={Detail} />
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;

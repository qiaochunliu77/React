import { combineReducers } from 'redux-immutable';
import { createStore, 
  // combineReducers,
   applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import HomeReducer from './reducers/home/index';


const rootReducer = combineReducers({
  home: HomeReducer
})
// rootReducer = { home: immutable }
// rootReducer 整个 rootReducer 并不是 immutable 的
// state  = { title: fromJS() }
// HomeReducer 里面数据 immutable
// rootReducer 里面的数据 还是 原生 js
export default createStore(rootReducer, applyMiddleware(thunk))
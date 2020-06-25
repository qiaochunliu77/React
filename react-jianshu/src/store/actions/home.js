// 一个action 应该是一个对象
// {
//
// type: 'GET_ HOME_ LIST' ,
// xxx:
// }
// redux 中间件: 不同的act ion,
// redux-thunk: 函数

import { GET_HOME_LIST } from '../constants';

export const homeListActionCreator = (homeList) => ({
    type: GET_HOME_LIST,
    homeList
  })
// 没有redux-thunk
// dispatch({

// })
// 加了中间件thunk
// dispatch(function() {

// }) 
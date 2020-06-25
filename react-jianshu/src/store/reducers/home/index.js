import { fromJS } from 'immutable';
import { GET_HOME_LIST } from '../../constants';

// 数据：状态
// 初始化:immutable
// 修改的时候：immuatable(concat)
const defaultState = fromJS({
  homeList: []
})

export default function(state = defaultState, action) {
  switch(action.type) {
    case 'GET_HOME_LIST':
      const newHomeList = action.homeList
      return state.set('homeList',newHomeList)
      // return {
      //   homeList: action.homeList
      // };
    default:
      return defaultState
  }
}
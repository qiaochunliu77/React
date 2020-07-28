import { combineReducers } from 'redux';
// redux 分模块 模块化
import { reducer as recommendReducer } from '../application/Recommend/store/index';
import { reducer as singersReducer } from '../application/Singers/store/index';
// 组合
export default combineReducers({
    recommend: recommendReducer,
    singers: singersReducer
})
import * as actionTypes from './constants';

const defaultState = {
    recommendList: [],
    banners: [],
    enterLoading: true
}
// 返回数据
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            return { ...state, banners: action.data }
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return { ...state, recommendList: action.data }
        case actionTypes.CHANGE_ENTER_LOADING:
            return { ...state, enterLoading: action.data }
        default:
            return state
    }
}
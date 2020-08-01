import * as actionTypes from './constants';
// 定义数据 和状态
const defaultState = {
    category: "",
    alpha: "",
    singerList: [],
    enterLoading: true,
    pullUpLoading: false,
    pullDownLoading: false,
    listOffset: 0, // 请求列表的偏移不是page，是个数
}

// 纯函数 只能由传入的state和action决定
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ALPHA:
            return {
                ...state, alpha: action.data, listOffset: 0,enterLoading: true
            }
        // return state.merge({
        //   'alpha': action.data,
        //   listOffset: 0,
        //   enterLoading: true
        // });
        case actionTypes.CHANGE_CATOGORY:
            return {
                ...state, category: action.data,
                listOffset: 0,
                enterLoading: true
            }
            // return state.merge({
            //     'category': action.data,
            //     listOffset: 0,
            //     enterLoading: true
            // });;
        case actionTypes.CHANGE_SINGER_LIST:
            return {...state,singerList:action.data.data }
        case actionTypes.CHANGE_LIST_OFFSET:
            return {...state, listOffset:action.data}
        case actionTypes.CHANGE_ENTER_LOADING:
            return {...state, enterLoading: action.data}
        case actionTypes.CHANGE_PULLUP_LOADING:
            return {...state, pullDownLoading:action.data}
        case actionTypes.CHANGE_PULLDOWN_LOADING:
            return {...state, pullDownLoading: action.data}
        default:
            return state;
    }
}
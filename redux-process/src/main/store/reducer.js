import * as actionTypes from './constant.js';

const defaultState = {
    index:0,
    number:10
}

const reducer = (state = defaultState, action ) => {
    switch (actionTypes){
        case actionTypes.CREAMENT:
            return {...state, maindata:action.data}
        case actionTypes.DECREMENT:
            return {...state, maindata:action.data}
        default:
            return state
    }
}

export default reducer;
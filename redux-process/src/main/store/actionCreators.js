import * as actionTypes from './constant.js'

export const crement = (data) => {
    return {
        type: actionTypes.CREAMENT,
        data: data+1
    }
}
export const decrement = (data) => {
    return {
        type: actionTypes.DECREMENT,
        data: data-1
    }
}
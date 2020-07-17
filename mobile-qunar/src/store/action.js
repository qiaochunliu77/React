export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'SET_TO';

export function setFrom(from) {
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}
export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}
export function exchangeFromTo(from, to) {
    // 1.两个action分别调用
    // 2.payload 传值
    return (dispatch, getState) => {
        const { from , to } = getState()
        dispatch(setFrom(to));
        dispatch(setTo(from));
    }
}
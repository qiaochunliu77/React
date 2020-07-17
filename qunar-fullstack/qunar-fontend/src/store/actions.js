export const ACTION_SET_CITY_SELECTOR_VISIBLE = 'ACTION_SET_CITY_SELECTOR_VISIBLE';
export const ACTION_SET_CITY_DATA = 'ACTION_SET_CITY_DATAv';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'ACTION_SET_IS_LOADING_CITY_DATA';

export function showCitySelector() {
    return {
        type: ACTION_SET_CITY_SELECTOR_VISIBLE,
        payload: true
    }
}
export function fetchCityData() {
    // 异步处理 返回一个函数
    // 请求全写在action
    return (dispatch, getState) => {
        fetch('/rest/cities')
            .then(res => res.json())
            .then(cityData => {
                dispatch(setCityData(cityData))
            })
    }
}
export function setCityData(cityData) {
    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
    }
}
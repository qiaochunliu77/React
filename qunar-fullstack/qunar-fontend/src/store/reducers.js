import { 
    ACTION_SET_CITY_SELECTOR_VISIBLE,
    ACTION_SET_CITY_DATA,
    ACTION_SET_IS_LOADING_CITY_DATA
}from './action'
export default {
    // 页面状态 ，改变对应数据的改变
    isCitySelectorVisible(state = false, action){
        const { type, payload } = action;
        switch (type){
            case ACTION_SET_CITY_SELECTOR_VISIBLE:
                return payload
            default:
        }
        return state
    },
    CityData(state = null, action){
        const { type, payload } = action;
        switch (type){
            case ACTION_SET_CITY_DATA:
                return payload
            default:
        }
        return state
    },
    isLoadingCityData(state = false, action){
        const { type, payload } = action;
        switch (type){
            case ACTION_SET_IS_LOADING_CITY_DATA:
                return payload
            default:
        }
        return state
    }
}
// reducers生成值 
// fetchcitydata
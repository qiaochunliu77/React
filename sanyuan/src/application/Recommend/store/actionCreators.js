// api模块

import * as actionTypes from './constants'
import { getRecommendListRequest, getBannersRequest  } from '../../../api/request';

// 同步
export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data:data
})

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data
})

export const changeBanners = (data) =>({
    type: actionTypes.CHANGE_BANNER,
    data:data
})

// 异步
export const getRecommendList = () => {
    return (dispatch) => {
        // 发请求
        // 两个同步的action
        getRecommendListRequest().then(data => {
            // duspatch进store
            dispatch(changeRecommendList(data))
            dispatch(changeEnterLoading(false))
        }).catch(() => {
            console.log('推荐歌单数据有误')
        })
    }
}

export const getBanners = ()=>{
    return (dispatch) => {
        getBannersRequest()
        .then(data => {
            console.log(data)
            const action = changeBanners(data.data.banners);
            dispatch(action);
        })
        .catch(() => {
            console.log('banners请求失败')
        })
    }
}

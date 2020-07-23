import React, { useEffect, useState, memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators'

function Recommend(props) {
    const { recommendList, banners, enterLoading } = props; //state
    const { getRecommendListDataDispatch, getBannersDataDispatch } = props; //dispatch
    console.log(recommendList, banners, enterLoading);

    useEffect(()=> {
        if(!recommendList.length) {
            getRecommendListDataDispatch();
        }

    },[])

    return (
        <React.Fragment>
            Recommend
        </React.Fragment>
    )
}
// 获取父组件的store
const mapStateToProps = (state) => ({
    recommendList: state.recommend.recommendList,
    banners:state.recommend.banners,
    enterLoading: state.recommend.enterLoading
})
const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendListDataDispatch() {
            dispatch(actionTypes.getRecommendList())
        },
        getBannersDataDispatch(){
            dispatch(actionTypes.getBanners())
        }
        
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
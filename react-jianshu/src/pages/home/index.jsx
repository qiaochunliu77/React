import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { homeListActionCreator } from '../../store/actions/home';
import { fromJS } from 'immutable';
class Home extends Component {
  componentDidMount() {
    this.props.fetchHomeList(1);
  }
  state = {  }
  render() {
    console.log(this.props)
    return ( <div>
      home
      length: { this.props.homeList.size }
    </div> );
  }
}
// 获取 数据
// state： 整个 store， home 页面，只要 home模块，过滤一下
// 过滤完结果（return）都会由 connect 传给你组件的 props
// 组件 里面 逻辑很少


const mapStateToProps = (state) => {
  return {
    homeList: state.getIn(['home', 'homeList'])
  }
}
// 用户 操作 UI 引起页面变化
// 发起一个 action
// dispacth 行为 connect 传给 组件
const mapDispatchToProps = (dispatch) => {
  return {
    // 逻辑尽可能封装在这里
    fetchHomeList(a) {
      // 请求
      axios.get('/home/home.json')
      .then(res => {
        const homeList = res.data;
        // homeList 传到 action 那一步
        // getHomeList.homeList = fromJS(homeList)
        // 请求回来的数据 和 redux action
        let action = homeListActionCreator(fromJS(homeList))
        dispatch(action)
      })  
    },
    dispatch
  }
}
// 连接 桥 代理
// redux -》 桥 -》 react
// redux store   -》 react  Provider 全局 功能
// 每个组件里面可以获取到它
// 规定获取 redux 里面数据，mapStateToProps 的 返回值，connect 返回值放到 props
export default connect(mapStateToProps, mapDispatchToProps)(Home);
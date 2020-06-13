import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../../store/actions/home';
class Home extends Component {
  componentDidMount() {
    this.props.fetchHomeList();
  }
  state = { }
  render() { 
    return ( <div>
      home
      length: { this.props.homeList.length }
    </div> );
  }
}

// 获取数据 
// state 整个state 但我只要home
// mapStateToProps 过滤一下 返回结果 都会由connect传给组件的props
const mapStateToProps = (state) => {
  return {
    homeList: state.getIn(['home', 'homeList'])
  }
}
// 用户 操作 ui 引起页面变化 
// 发起一个action 
// dispatch 行为 connect 传给组件 
const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeList() {
      dispatch(getHomeList)
    }
  }
}
// 连接桥
//  provider 是全局的 功能
// 规定 获取redux 里面的数据 mapStateToProps的返回值 connect 返回值放到home
export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 数据跟组件是分离的
import axios from 'axios';
import './mock/data.js';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.min.css'

// 返回值是组件
// /posts/ axios api url
// (Post) 组件作为参数 高阶组件
// loadAndRefresh高阶函数 通用的提供数据请求和更新
class Post extends Component {
  render() {
    const data  = this.props.list;
    const columns = [
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Age',
        dataIndex: 'Age',
        key: 'Age',
      },
      {
        title: 'Address',
        dataIndex: 'Address',
        key: 'address',
      },
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
      }, {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Delete</a>
          </Space>
        ),
      },
    ];

    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}
class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    )
  }
}

// 抽象
const loadAndRefresh = (url) => (WrappedComponent) => {
  // 返回组件
  return class extends Component {
    constructor() {
      super();
      this.state = {

      }
    }
    async _loadData() {
      this.setState({
        msg: 'loading...'
      })
      axios.get(url)
        .then(res => {
          console.log(res.data)
          this.setState({
            msg: res.data.title,
            content: res.data.content,
            list:res.data.list
          })
        })
    }
    componentDidMount() {
      //数据请求
      this._loadData();
    }
    render() {
      const props = {
        msg: this.state.msg,
        content: this.state.content,
        list:this.state.list
      }
      return (
        <WrappedComponent {...props} />
      )
    }
  }
}
// 复用
const WrappedPost = loadAndRefresh('/posts/')(Post)
const WrappedComment = loadAndRefresh('/comments/')(Comment)

function App() {
  return (
    <div className="App">
      {/* 请求一篇文章 */}
      {/* <Post/> */}
      <WrappedPost />
      <WrappedComment />
    </div>
  );
}

export default App;

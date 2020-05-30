import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Card>
    <h2>React.js 小书</h2>
    <div>开源、免费、专业、简单</div>
    订阅：<input />
  </Card>,
  document.getElementById('root')
)








// 把组件渲染并且构造 DOM 树
// 插入到页面上上id 为 root 的 div 元素）

// React.createElement 中实例化一个 Header
// const header = new Header(props, children)
// // React.createElement 中调用 header.render 方法渲染组件的内容
// const headerJsxObject = header.render()

// // ReactDOM 用渲染后的 JavaScript 对象来来构建真正的 DOM 元素
// const headerDOM = createDOMFromObject(headerJsxObject)
// // ReactDOM 把 DOM 元素塞到页面上
// document.getElementById('root').appendChild(headerDOM)

import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'



class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []  /*数据状态 父组件 数据统一  一致性 */
    }
  }


  handleSubmitComment (comment) {
    
  }



  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          comments={this.state.comments}
        />
      </div>
    )
  }
}
export default CommentApp;
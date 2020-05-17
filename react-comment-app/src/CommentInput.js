import React, { Component } from 'react';


class CommentInput extends Component {
  constructor() { //构造函数
    super(); //父类的构造函数执行
    this.state = { //状态
      username: '',
      content: ''
    }
  }
  render() {
    //   react jsx { js 动态区域}
    // es6 解构
    let { username, content } = this.state;
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名:</span>
          <div className="comment-filed-input">
            <input type="text" value={username}
              onChange={this.handleUSernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea value={content}
              onChange={this.handleContentChange.bind(this)}
            ></textarea>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }
  handleUSernameChange(event) {
    //   console.log(event)
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange(event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit(event) {
    //   console.log(this.state)
    const { username, content } = this.state;
    const { onSubmit } = this.props;
    console.log(this.props,'props')
    onSubmit({ username, content })
    this.setState({
      content: ''
    })
  }
}


export default CommentInput;
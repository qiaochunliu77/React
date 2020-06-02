import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static propTypes = {
    // 组件参数验证
    onSubmit:PropTypes.func
  }
  constructor() { //构造函数
    super(); //父类的构造函数执行
    this.state = { //状态
      username: '',
      content: ''
    }
  }
  componentWillMount(){
    this._loadUsername()
  }
  componentDidMount () {
    this.textarea.focus()
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
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUSernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea value={content}
             ref={(textarea) => this.textarea = textarea}
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
  _loadUsername(){
    const username = localStorage.getItem('username');
    if(username){
      this.setState({username})
    }
  }
  // 把用户输入的内容传给了 _saveUsername 私有方法
  _saveUsername(username){
    localStorage.setItem('userName',username)
  }
  handleUsernameBlur(event){
    this._saveUsername(event.target.value)
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
  handleSubmit () {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({ content: '' })
  }
}


export default CommentInput;
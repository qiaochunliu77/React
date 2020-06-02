import React, { Component } from 'react'; //按需加载 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';

// react 来自于facebook 继承component就拥有了这个组件
class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadComments()
    }

    _loadComments() {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
    }
    handleDeleteComment (index) {
        console.log(index)
      }
    render() {
        const { comments } = this.state
        return (
            <div className='wrapper'>
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
            <CommentList
              comments={this.state.comments}
              onDeleteComment={this.handleDeleteComment.bind(this)} />
          </div>
        )
    }
    _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
      }
    
      handleSubmitComment (comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        this._saveComments(comments)
        comments.push(comment)
        this.setState({ comments })
        
      }
}
export default CommentApp
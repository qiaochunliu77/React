import React ,{Component }from 'react'; //按需加载 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';

// react 来自于facebook 继承component就拥有了这个组件
class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments:[{
                username:'lqc',
                content:'plmm'
            },{
                username:'zzh',
                content:'pl'
            }]
        }
    }
    render(){ //接口
        const { comments } = this.state
        return(
            <div className='wrapper'>
                {/* onSubmit事件监听 */}
                {/* 数据属性 state props 
                react 组件 render()是必须的 页面输出
                state 内部数据
                props 外部数据
                */}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                {/* 伸手向父组件要什么  静态页面 props 显示评论列表*/}
                <CommentList comments = { comments }/>
            </div>
        )
    }
    handleSubmitComment(comment){
        let {comments} = this.state;
        comments.unshift(comment)
        this.setState({
            comments:comments
        })
        // this.state({
        //     comments:[comment, ... this.state.comments]
        // })
    }
}
export default CommentApp
import React from 'react';
import axios from 'axios';
import './App.css';

// 页面
//  -列表 /?tab=all
//  -详情 /topic/

// mv-vm 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value:'123456',
      tabs:[
        {content:'全部',params:'all'},
        {content:'招聘',params:'job'},
        {content:'精华',params:'good'},
        {content:'分享',params:'share'},
        {content:'问答',params:'ask'}
      ],
      tab: 'all',
      isLoading:true,
      lists:[]
    }
  }
  // 生命周期
  // App 被reactDom 渲染到 pc上
  componentDidMount() {
    this.handleGetPost()
  }

  handleGetPost = () => {
    const { tab } = this.state;
    axios({
      url: 'https://cnodejs.org/api/v1/topics',
      params: {
        tab: tab
      }
    })
      .then(res => {
        // console.log(res.data)
        // 修改状态
        this.setState({
          lists: res.data.data,
          isLoading:false
        })
      })
      .catch(err => {
        this.setState({
          isLoading:false
        })
      })
  }

  handleTabChange = (event) =>{
    // this 定义位置决定
    // 知道了 点的是 哪一项 
    console.log(event.target)
    const tab = event.target.getAttribute('data-tab');
    // 发个请求
    this.setState({
      tab:tab,
      isLoading:true
    },() => {
      // setState 异步 
      this.handleGetPost()
    })

  }
  handleChange =(event) => {
    this.setState({
      value:event.target.value
    })
  }
  render() {
    const { lists,tabs,tab,isLoading,value } = this.state;
    //  js 表达式 要用{} 包起来 
    // 受控组件 value + onChange， 输入框内容 受本组件里的 state 控制 
    // 非受控组件 
    return (
      <div>
        <input type='text' placeholder='123' defalutvalue='123456' value={value} onChange={this.handleChange}></input>
        <input type='text' placeholder='123' defalutvalue='123456' defaultValue='1234'></input>
        {/* react不会渲染那些值为 false undefined null 的内容 */}
        {/* &&： 第一个成立  第二个也要成立 */}
        {/* || : 第一个成立就执行第一个 不然就执行第二个 */}
        {isLoading && '正在加载中...'}
        { lists.length === 0 && '暂无文章请重试'}
        {
          tabs.map((tabobj,i) => {
            return (
            <div key={i} data-tab={tabobj.params}
            className={tabobj.params === tab ? 'hight-light': ''} onClick={this.handleTabChange}>
              {tabobj.content}
              </div>
            )
          })
        }
        {
          lists.map((list,i) => {
            return(
            <div key={i}>{list.title}</div>
            )
          })
        }
      </div>

    )
  }
}
// 默认导出
export default App;
// 命名导出
// export const name = 'lilei';

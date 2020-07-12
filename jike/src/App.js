import React, { Component } from 'react';
import './App.css';
import TabPaner from './page/TabPaner'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import axios from 'axios';

const { TabPane } = Tabs;

class App extends Component {
  state = {
    finish: 1,
    type: 1,
    list: [],
    allLessons: [],
    lessons: [],
    fontColor: true,
    background:true
  }
  async _loadData() {
    axios.get('/data/')
      .then(res => {
        console.log(res.data, '-----------------')
        this.setState({
          list: res.data.list,
          allLessons: res.data.list,
          lessons: res.data.list
        })
      })
  }
  handleTabChange = (key) => {
    console.log(key, '++++++++')
    if (key == 1) {
      this.setState({
        allLessons: this.state.list
      })
    }else {
      let res = this.state.list.filter((n) => {
        return n.finish + 1 == key
      })
      this.setState({
        allLessons: res,
        lessons: res
      })
    }
  }
  handleTypeChange = (key) => {
    console.log(key, '_________')
    if (key == 1) {
      this.setState({
        lessons: this.state.allLessons
      })
    } else {
      let res = this.state.allLessons.filter((n) => {
        return n.type + 1 == key
      })
      console.log(res)
      this.setState({
        lessons: res
      })
    }
  }
  handle1 = () => {
    tClickhis.setState({
      fontColor: false
    })
    console.log(this.state.fontColor, '????????????????????')
  }
  handleClick2 = () => {
    this.setState({
      background: false
    })
    console.log(this.state.background, '!!!!!!!!!!!!')
  }
  componentDidMount() {
    this._loadData();
  }
  render() {
    let style1 = {
      color:  this.state.fontColor ? '#888' :'#fa8919'
    }
    let style2 = {
      marginTop : '0',
      // this.state.background ? 'none' :
      backgroundColor: '#fbf5ee',
      color:  '#fa8919'
      // this.state.background ?'#888' :
    }
    const tab = ["全部", "已学完", "未学完"];
    const type = ["所有形式", "专栏", "视频课", "微课", "每日一课", "其他"];
    return (
      <div>
        <h1>我的课程</h1>
        <Tabs 
        defaultActiveKey="1"
        style={style1}
        onChange={this.handleTabChange}
        >
          {
            tab.map((item, index) => {
              return (
                <TabPane
                  tab={item}
                  key={index + 1}
                  onClick={this.handleClick1}
                ></TabPane>
              )
            })
          }
        </Tabs>

        <Tabs onChange={this.handleTypeChange}
          type="card" 
          tabBarGutter={0}
        >
          {
            type.map((item, index) => {  
              return (
                <TabPane
                  tab={item}
                  key={index + 1}
                  style={style2}
                  onClick={this.handleClick2}
                ></TabPane>
              )
            })
          }
        </Tabs>

        <TabPaner data={this.state.lessons} />
      </div >
    );
  }
}
export default App;

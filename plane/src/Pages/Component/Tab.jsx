import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Tab extends Component {
    constructor(){
        super()
        this.state =[{

        }]
    }
    render() {
        const data = {
            
        }
        return (
            <div className='Tab'>
                <div className="card">
                    <div className='background'></div>
                    <p className="title">视界</p>
                    <p className="line"></p>
                    <p className="author">顾中正</p>
                </div>
                <div className="card">
                    <div className='background'></div>
                    <p className="title">畅聊科技教育</p>
                    <p className="line"></p>
                    <p className="author">刘凤飞(果果老师)</p>
                </div>
                <div className="card">
                    <div className='background'></div>
                    <p className="title">畅聊科技教育</p>
                    <p className="line"></p>
                    <p className="author">刘凤飞(果果老师)</p>
                </div>
                <div className="card">
                    <div className='background'></div>
                    <p className="title">畅聊科技教育</p>
                    <p className="line"></p>
                    <p className="author">刘凤飞(果果老师)</p>
                </div>
                <Link to="/main">
                    <div className="new-card">
                        <div>
                            <div className="iconfont icon-jiahao2 jiahao"></div>
                            <p>创建星球</p>
                        </div>
                    </div>
                </Link>

            </div>
        );
    }
}

export default Tab;
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Main extends Component {
    state = {}
    render() {
        // handleChange = (e) {
            
        // }
        return (
            <div className='main'>
                <div className="add-bar">
                    <p className="cancel">取消</p>
                    <Link to="/">
                        <div className="next">下一步</div>
                    </Link>
                </div>
                <div className="upload">
                    <p className="iconfont camera">&#xe635;</p>
                </div>
                <div className='input-bar'>
                    <input type="text" placeholder='输入星球名称' />
                </div>
            </div>
        );
    }
}

export default Main;
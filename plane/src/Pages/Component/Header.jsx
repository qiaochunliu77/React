import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
                <div className="header-item">
                    <p>知识星球
                    <span className='iconfont icon-jiahao'></span>
                    </p>
                </div>
                <div className="search-bar">
                    <div className="search">
                        <span className='iconfont icon-sousuo'></span>
                        <input type="text" placeholder="搜索用户、星球或内容"/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;
import React, { Component } from 'react';
class Footer extends Component {
    state = {

    }
    render() {
        return (
            <div className="footer">
                <div className="footer-item">
                    <div className="iconfont icon-faxian1 fontsize"></div>
                    <p>星球</p>
                </div>
                <div className="footer-item">
                    <div className="iconfont icon-duihuakuang"></div>
                    <p>动态</p>
                </div>
                <div className="footer-item">
                    <div className="iconfont icon-faxian2"></div>
                    <p>发现</p>
                </div>
                <div className="footer-item">
                    <div className="iconfont icon-icon_wode-"></div>
                    <p>我</p>
                </div>
            </div>
        );
    }
}

export default Footer;
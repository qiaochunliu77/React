import React from 'react';
import ReactDom from 'react-dom';
// import Header from '../../common/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import route from '../route'
function App() {
    return (
        <BrowserRouter>
            {renderRoutes(route)}
        </BrowserRouter>
    )
}
// root下面已经有东西了  
// 客户端不需要再构造dom节点 只需要做服务端完成不了的事情
// 如事件绑定等 
// 前端 hydrate 调和 将事件调和到和server的html上
// 在服务端的hmtl中请求script （静态资源的映射）
ReactDom.hydrate(<App />,
    document.getElementById('root'));
import React, { createContext } from 'react';
const context = createContext();// context包含provider comsumer

class Provider extends React.Component {
    render() {
        const { store } = this.props;
        return (<context.Provider value={store}>
            {/* 渲染provider的子组件  */}
            {this.props.children}
        </context.Provider>)
    }
}
function connect (mapState,mapDispatch){
    return function (Com) {
        return class Connnected extends React.Component{
            render() {
                // 真实的来自redux 怎么拿到redux里面的状态 
                // 在provider里面 通过 comsumer获取 
                let reduxState = {a:1,b:2}
                let filterProps = {}
                if(mapState){
                    filterProps = Object.assign(filterProps,mapState(reduxState))
                }
                if(mapDispatch){
                    filterProps = Object.assign(filterProps,mapDispatch())
                }
                return  (<Com {...filterProps}/>)
            }
        }
    }
}
export {
    context,
    Provider,
    connect
}
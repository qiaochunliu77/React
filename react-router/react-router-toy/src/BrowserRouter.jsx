import React from 'react'
const context = React.createContext();

function BrowserRouter (props) {
    const [pathname, setPathName] = React.useState('/');
    const update = (pathinfo) => {
        // 强制更新一下
        setPathName(pathinfo)
    }
    React.useEffect(()=>{
        window.addEventListener('popstate', () => {
            setPathName(window.location.pathname)
        })
    },[])
    return (
        <context.Provider  
            value={{
                    pathname: pathname,
                    update: update
                }}>
            {props.children}
        </context.Provider>
    )
}

// class BrowserRouter extends React.Component {
//     state = {
//         pathname: '/'
//     }
//     update = (pathinfo) => {
//         // 强制更新一下 
//         this.setState(pathinfo)
//     }
//     componentDidMount() {
//         // 监听前进后退事件
//         window.addEventListener('popstate', () => {
//             this.setState({
//                 pathname: window.location.pathname
//             })
//         })
//     }
//     componentWillUnmount() {
//         window.removeEventListener('popstate');
//     }
//     render() {
//         return (
//             <context.Provider value={
//                 {
//                     pathname:this.state.pathname,
//                     update: this.update
//                 }
//             }>
//             {this.props.children}
//         </context.Provider>)
//     }
// }
export {
    context,
    BrowserRouter
}
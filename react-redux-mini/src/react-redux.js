import React, { createContext } from 'react';
const context = createContext();// context包含provider comsumer

class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reduxState: props.store.getState()
        }
    }
    componentDidMount() {
        const { store } = this.props;
        store.subscribe(() => {
            this.setState({
                reduxState: store.getState()
            })
        })
    }
    render() {
        const { store } = this.props;
        const { reduxState } = this.state;
        return (<context.Provider value={{ store, reduxState }}>
            {/* 渲染provider的子组件  */}
            {this.props.children}
        </context.Provider>)
    }
}
function connect(mapState, mapDispatch) {
    return function (Com) {
        return class Connnected extends React.Component {
            render() {
                // 真实的来自redux 怎么拿到redux里面的状态 
                // 在provider里面 通过 comsumer获取 
                // let reduxState = {a:1,b:2}
                // let filterProps = {}
                // if(mapState){
                //     filterProps = Object.assign(filterProps,mapState(reduxState))
                // }
                // if(mapDispatch){
                //     filterProps = Object.assign(filterProps,mapDispatch())
                // }
                // return  (<Com {...filterProps}/>)
                return (
                    <context.Consumer>
                        {
                            ({ store }) => {
                                const state = store.getState()
                                const dispatch = store.dispatch
                                let props = {};
                                if (mapState) {
                                    props = Object.assign(props, mapState(state))
                                }
                                if (mapDispatch) {
                                    props = Object.assign(props, mapDispatch(dispatch))
                                }
                                return <Com {...props} />
                            }
                        }
                    </context.Consumer>
                )
            }
        }
    }
}
export {
    context,
    Provider,
    connect
}
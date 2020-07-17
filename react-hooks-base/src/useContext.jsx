import React, { CreateContext } from 'react';
import { createContext, useState, useEffect, useContext, useRef } from 'react';
// 跨层级传递数据

const context = createContext({
    theme: 'red'
})

function P() {
    let [ obj, setTheme ] = useState({theme:'red'})
    useEffect(() => {
        setTimeout(() => {
            // obj.theme = 'blue'
            setTheme({
                theme: 'blue'
            })
        },3000)
    },[])
    return (
        <context.Provider value={obj}>
            <Child a = '1'/>
        </context.Provider>
    )
}
function Child() {
    console.log('render....child')
    return <Son />
}
function Son() {
    console.log('render....son')
    // 取出离他最近的context
    const value = useContext(context);
    const Ref = useRef();
    useEffect(() => {
        console.log(Ref.current,'--------------------')
    },[])
    return (
        <p>666
            <h2 style = {{color:value.theme}}
            Ref = {Ref}
            >h2</h2>
        {/* <context.Consumer>
            {
                (value) => {
                    return (
                        <h2 style={{color:value.theme}}>h2</h2>
                    )
                }
            }
        </context.Consumer> */}
        </p>
    )
}
export default P
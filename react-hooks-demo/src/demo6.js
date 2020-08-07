import React, { useState, useRef, useEffect } from "react";
export const MyComponent = () => {
    const [visible, setVisible] = useState(false);
    // mount unmount 
    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={() => setVisible(!visible)}>
                Toggle Child component visibility: </button>
        </>
    )
}

export const MyChildComponent = (props) => {
    const [filter, setFilter] = useState("")
    const [userCollection, setUserCollection] = useState([])
    const mountedRef = useRef(false);

    useEffect(() => {
        mountedRef.current = true
        return () => (mountedRef.current = false)
    }, [])

    const setSafeUserCollection = json => mountedRef.current && setUserCollection(json)

    useEffect(() => {
        setTimeout(() => {
            fetch(
                `https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
                .then(response => response.json())
                // 不能做
                .then(json => {
                    setSafeUserCollection(json)
                })
        }, 2500)
    }, [filter])

    return (
        <div>
            <input type="text" value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <ul>
                {
                    userCollection.map((user, index) => (
                        <li key={index}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
// 用户看到页面是白的 就退出了 但数据还在请求 组件已经卸载


// index.js:1 Warning: Can't perform a React state update on an unmounted component. 不能在一个卸载了的组件里面去更新状态
// This is a no-op, but it indicates a memory leak in your application. To fix,      内存泄漏
// cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.


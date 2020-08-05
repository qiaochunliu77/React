import React, { useState, useEffect } from 'react';

// export const MyComponent = props => {
//     const [ userInfo , setUserInfo ] = useState({
//         name:'john',
//         lastName: 'Doe'
//     })
//     return (
//         <>
//             <h4>{userInfo.name}{userInfo.lastName}</h4>
//             <input type="text" 
//             value={userInfo.lastName}
//             onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value })}
//             />
//         </>
//     )
// }


// export const MyComponent = props => {
//     // JSX -> dom node
//     const [myName, setmyName] = React.useState('John Doe')
//     return (
//         <>
//             <h4>{myName}</h4>
//             <input type="text" value={myName}
//                 onChange={(e) => setmyName(e.target.value)}/>
//         </>
//     )
// }

// export const MyComponent = () => {
//     const [username, setUsername] = React.useState("");
//     // unmount didmount updata
//     useEffect(() =>{
//         setTimeout(() => {
//             setUsername("ddd")
//         }, 1500)
//     },[])
//     return (
//         <>
//             <h4>{username}</h4>
//             <input 
//                 type="text" 
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//         </>
//     )
// }

export const MyComponent = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            {visible && <MyChildComponent />}
            <button onClick={e => setVisible(!visible)}>
                Toggle child component visibility
            </button>
        </>
    )
}
const MyChildComponent = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'john',
        lastName: 'Done'
    })
    useEffect(() => {
        // 两个都执行 update
        // 挂载 mount
        console.log('is mounted')
        return () => {
            // 卸载 unmount
            console.log('unmounted')
        }
    })
    return (
        <>
            <h4>{userInfo.name} {userInfo.lastName}</h4>
            <input
                type="text"
                onChange={(e) => setUserInfo({...userInfo,name:e.target.value})}
            />
        </>
    )
}
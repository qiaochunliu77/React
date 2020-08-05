import React,{memo, useState} from 'react';

export const MyComponent =() => {
    const [userInfo, setUserInfo ] = useState({
        name:'John',
        lastname: 'Doe'
    })
    setTimeout(() => {
        console.log('------------------')
        setUserInfo({
            ...userInfo,
            name:'John'
        })
    },2000)
    return (
        <>
            <DisplayUsername name={userInfo.name}/>
            <input 
            type="text"
            value={userInfo.name}
            onChange ={e=> setUserInfo({
                ...userInfo,
                name:e.target.value
            })}
            />
        </>
    )
}
const DisplayUsername = memo((props) => {
    console.log('只在name发生改变时才更新')
    return <h3>{props.name}</h3>
})

// export const MyComponent = () => {
//     const [filter, setfilter ] = React.useState('');
//     const [userCollection, setUserCollection] = React.useState([]);
//     React.useEffect(() => {
//         fetch(
//             `https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//             .then(response => response.json())
//             .then(json => setUserCollection(json));
//     },[filter])
//     return (
//         // github api 
//         // 用户的输入跟useEffect监听 update
//         // 页面组件的列表输出
//         <div>
//             <input  value={filter} onChange = {e=> setfilter(e.target.value)}/>
//             <ul>
//                 {
//                     userCollection.map((item,index) => (
//                         <li key={index}>{item.name}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }


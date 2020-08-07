import React, {useState} from 'react';

export const MyComponent = () => {
    const [message, setMessage] = useState('innitail message');
    const [seconds, setSeconds] = useState(0);
    const secondsRef = React.useRef(seconds); //保存任何可变值 在该函数生命周期内不变

    React.useEffect(() => {
        setTimeout(() => {
            console.log(seconds)
            setSeconds(1)
            secondsRef.current  = 1
        },1000)

        // 闭包 两个settieout中的seconds是两个不同的
        setTimeout(() => {
            setMessage(`Total seconds: ${secondsRef.current}`)
        },2000)
    },[])

    return (
        <>
            <h4>{message}</h4>
            <h3>{seconds}</h3>
        </>
    )
}
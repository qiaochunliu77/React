import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
export default function Header() {
    const handleClick = () => {
        console.log(123)
    }
    useEffect(() => {
        console.log(1234)
    }, [])
    return (
        <div>
            <button onClick={handleClick}>
                按钮
            </button>
            <Link to='/detail'>detail</Link>
            <Link to='/login'>login</Link>
        </div>
    )
}
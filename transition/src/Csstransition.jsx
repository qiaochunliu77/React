import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
function Demo() {
    const [isIn, setisIn] = useState(true);
    // 移走: *-exit ms *-exit-active *-exit-done
    // 移进来: *-enter ms *-enter-active *-enter-done
    return (
        <>
            <CSSTransition 
            in={isIn}
            timeout={2000}
            classNames='msg'
            >
                <div className='box'></div>
            </CSSTransition>
            <button onClick={() => {setisIn(!isIn)}}>toggle</button>
        </>
    )
}
export default Demo
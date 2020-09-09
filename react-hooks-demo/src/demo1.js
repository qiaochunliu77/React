import React from 'react';

export const MyComponent = props => {
    // String Object Boolean
    const [myName, setMyname] = React.useState('John Doe');
    // let _useState = useState('John');
    // let myName = _useState(0);
    // let setName = _useState[1];
    return (
        <>
            <h4>{myName}</h4>
            <input type='text' value={myName}
            onchange={(e)=>{setMyname(e.target-.value)}}
            />
        </>
    )
}
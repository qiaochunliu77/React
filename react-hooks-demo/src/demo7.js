// 数据在hooks里面怎么走的
// useState -> context轻量 | reducer重 | useReducer | mobx | 
import React,{useReducer} from 'react';

 const userInfoReducer = (state, action) => {  
    switch (action.type) {
        case "setusername":
            return {
                ...state,
                name: action.payload
            }
        case "setlastname":
            return {
                ...state,
                lastname: action.payload
            }
        default :
        return state;
    }
}

const Editusername = React.memo(props=> {
    console.log('hey')
    return (
        <input value={props.name}
        onChange={e=> props.dispatch({
            type:'setusername',
            payload: e.target.value
        })}
        />
    )
})

export const MyComponent=() => {
    const [reducer, dispatch] = useReducer(userInfoReducer, {
        name: 'John',
        lastname: 'Doe'
    })
    return (
        <>     
            <h3>{reducer.name}{reducer.lastname}</h3>
            <Editusername name={reducer.name} dispatch={dispatch}/>
            <input 
            type='text'
            value={reducer.lastname}
            onChange={e=> dispatch({
                type:'setlastname',
                payload:e.target.value
            })}
            ></input>
        </>
    )
}
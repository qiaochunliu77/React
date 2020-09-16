import React,{memo, useEffect} from 'react'
import * as actionTypes from './store/actionCreators';
import {connect} from 'react-redux'
function Main (props){
    const {data} = props;
    // const [getIndexcrement, getIndexdecrement] = props;
    // let my = null;
    // useEffect(() => {
    //     my = getIndexcrement()
    // },[])
    return (
            <div>12</div>
    )
}
const mapStateToProps = (state) => ({
    data: state

})
const mapDispatchToProps = (dispacth) => {
    return {
        getIndexcrement () {
            dispacth(actionTypes.crement())
        },
        getIndexdecrement () {
            dispacth (actionTypes.decrement())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Main))
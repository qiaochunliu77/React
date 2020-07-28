
import React from 'react';
import { Route, Redirect} from 'react-router'
import authStore from './store/auth';
// import Collect from './Collect';
function PrivateRoute(props){
    const isLogin = authStore.isLogin;
    // 登录了就进入， 没登录就重定向出去
    const { path, component } = props;
    if(!isLogin) {
        return <Redirect from='path' to='/login' />
    }
    return (
        <Route path={path} component={component} />
    )
}
{/* <PrivateRoute path='/collect' component={Collect} /> */}
export default PrivateRoute;

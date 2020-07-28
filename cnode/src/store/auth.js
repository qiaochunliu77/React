import {observable, action} from 'mobx'
class Auth {
    // observable state 用 observable 修饰过的变量 变量被修改了 页面就会就会重新渲染
    @observable isLogin = true;//没有和页面绑定
    @action
    login(){
        this.isLogin = true;
    }
    logout(){
        this.login = false;
    }
}

export default new Auth();
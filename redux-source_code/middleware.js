const _ = require('lodash')
function fn1(str) {
    return str + 'def'
}
// class
function fn2(str) {
    return str.toUpperCase()
}
// 使用loadsh.flow将两个函数功能组合 
// 柯里化 不可变 副作用 组合 
const fn = myFlow([fn1, fn2])
console.log(fn('abc'))

// 自己实现一个flow
function myFlow(fns) {
    // 组合所有的函数
    // 将前一个函数的结果给下一个函数处理
    // hoc
    return function (defaultValue) {
        let res = defaultValue;
        while(fns.length) {
            let first = fns.shift();//取第一个
            res = first(res);
        }
        return res;
    }

}
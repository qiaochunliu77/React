## 函数式编程
    不可变
    纯函数：
        没有 副作用
        输入相同 输出一定也相同
    高阶函数

## immutable
浅拷贝或者深拷贝复制一个新对象，从而使得新对象与旧对象引用地址不同。
深拷贝 浅拷贝 各有优缺点

- 结构共享

```js
let defaultState = fromJS({})
function reducer(){
    switch() {
        case
    }
}
```


运用immutable 结构共享的特性 优化性能
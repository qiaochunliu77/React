## 函数式编程
    不可变
    纯函数：
        没有 副作用
        输入相同 输出一定也相同

## immutable
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
# react 小书笔记
## state 
- this.onstateChange方法 改变状态后触发

## JSX
- 写 React.js 组件,必须从 react 的包当中引入 React 和 React.js 的组件父类 Component。
- ReactDOM 可以帮助我们把 React 组件渲染到页面上去
- 这种“在 JavaScript 写的标签的”语法叫 **JSX**。**编译**的过程会把类似 HTML 的 JSX 结构转换成 JavaScript 的对象结构。
- 所谓的 JSX 其实就是 JavaScript 对象。
- JSX到页面的过程
JSX ——> (Babel编译+react.js构造) ——> js对象 ——> (ReactDom.render) ——> Dom元素 ——>插入页面
- **react-dom** 负责把这个用来描述 UI 信息的 js 对象变成 DOM 元素，并且渲染到页面上。

## 事件监听 
- 这些 on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上。
- 由于调用时并不是通过对象方法调用（this.handleClickOnTitle），而是直接通过函数调用 （handleClickOnTitle）,所以事件监听函数内并不能通过this获取到实例。
- 未绑定 this->undefined    bind->this指向该实例化组件Title

## state
- **setState** 方法由父类 Component 所提供。当我们调用这个函数的时候，React.js 会更新组件的状态 state ，并且**重新调用 render 方法**，然后再把 render 方法所渲染的最新的内容显示到页面上。
- **setState之后 ,并不会马上修改 state。**React.js 的 setState 把你的传进来的状态缓存起来，稍后才会帮你更新到 state 上.
- 若要利用上一次 setState 结果进行运算： 可以在setState中传入一个函数
    this.setState((prevState) => {
      return { count: 0 }
    })
## props
- 在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值
- static defaultProps = {
      likedText: 'qq',
      unlikedText: 'xx'
    }

## state VS props
1. state 的主要作用是用于组件保存、控制、修改自己的可变状态。
2. props 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。
state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。
**尽量少地用 state，尽量多地用 props。**

## 渲染列表数据
- 如果你往 {} 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来。
- 对于用表达式套数组罗列到页面上的元素，都要为每个元素加上 **key** 属性，这个 key 必须是每个元素唯一的标识。

## demo
- 父组件通过props给子组件传入一个回调(onSubmit) 
- 子组件通过setstate将最新的数据传给父组件 并由父组件渲染
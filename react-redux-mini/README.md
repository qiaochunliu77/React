## react-redux 源码分析
redux实现了数据的修改 
怎么把状态给react用？  react-redux实现数据与页面绑定在一起

react-redux 的两个api  provider comsumer 
- provider 数据跨层级传递  
- provider 是对react原生 context的provider的封装 增加了dispatch的能力 
- connect 子组件获取到state
- 在connect里面返回的是comsumer 通过回调 和传过来的mapstate,mapdispacth 可以从store中的state，筛选出自己需要的state

没有刷新 
redux变了 立马更新页面 setState 

总结：
redux 提供的 state是let 声明的变量 -> 数据变了 页面不会变 不是state
redux的数据 拿过来 通过subscribe  封装成react的state 
是连接react-redux的桥梁  



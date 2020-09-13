## react-redux 源码分析
redux实现了数据的修改 怎么把状态给react用  react-redux实现数据与页面绑定在一起

react-redux 的两个api
provider comsumer 
provider 是对react原生 context的provider的封装 增加了dispatch的能力 
provider 数据跨层级传递 
connect 子组件获取到state
1. react-route
3. react-router嵌套
当路由比较复杂时，传统的手写router/route配置 难以维护 
企业级的路由配置方案 react-router-config 清晰，可维护 routes/index.js
layout app 里总共有几套皮肤 匹配那个级别所有的路由
routes react-router-config 提供renderRoutes(route,routes)

1. 样式组件 styled-components
    新的 stylus和less可以被取代 可以使用变量 兼容性 嵌套 架构中有主题方案(global-style)
2. import fastclick from 'fastclick';
    fastclick.attach(document.body);
    将click事件优化成touch事件，
3. layout blanklayout
4. route配置 react-router-config
5. lazy react优化 懒加载 suspence
6. betterScroll 

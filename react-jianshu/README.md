
## 哪些会引起重新渲染
- state
- 地址 -> react-router 
- props变化
- context变了 react.createContext

## 减少重新渲染 
state props对比后没有变化 没有必要重新渲染 ->  shouldComponentUpdate
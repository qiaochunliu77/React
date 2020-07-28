
// 定义数据 和状态
const defaultState = {
    category: "",
    alpha: "",
    singerList: [],
    enterLoading: true,
    pullUpLoading: false,
    pullDownLoading: false,
    listOffset: 0, // 请求列表的偏移不是page，是个数
  }
  
// 纯函数 只能由传入的state和action决定
export default (state = defaultState, action) => {
    switch (action.type) {
        default: 
            return state;
        
    }
}
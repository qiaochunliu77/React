import {
    getHotSingerListRequest,
    getSingerListRequest
  } from "../../../api/request";
  
// 如果你没有选择分类和筛选条件 useEffect
// 热门歌手
export const changeSingerList = 
export const getHotSingerList = () => {
    return (dispatch) => {
      getHotSingerListRequest(0).then(res => {
        const data = res.artists;
        dispatch(changeSingerList(data));
        dispatch(changeEnterLoading(false));
        dispatch(changePullDownLoading(false));
        dispatch(changeListOffset(data.length));
      }).catch(() => {
        console.log('热门歌手数据获取失败');
      })
    }
  };
//   
  export const refreshMoreHotSingerList = () => {
    return (dispatch, getState) => {
      const offset = getState().singers.listOffset;
      const singerList = getState().singers.singerList;
      getHotSingerListRequest(offset).then(res => {
        const data = [...singerList, ...res.artists];
        dispatch(changeSingerList(data));
        dispatch(changePullUpLoading(false));
        dispatch(changeListOffset(data.length));
      }).catch(() => {
        console.log('热门歌手数据获取失败');
      });
    }
  };
  
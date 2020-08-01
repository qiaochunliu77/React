import { axiosInstance } from './config'

// 罗列数据接口
// 项目所有请求api
// 首页广告
export const getBannersRequest = () => {
    return axiosInstance.get('/banner');
}
// 推荐列表
export const getRecommendListRequest = () => {
    return axiosInstance.get("/personalized");
};
// 歌手列表 支持分页0- 50 -100
// count放进reducer
// reducer init = { singerList:[], offset:0}
// useEffect dispatch getHotSingerList 异步
// getHotSingerListRequest api 请求
// then
//  changeSingerList [] [。。。oldDATA , ...data] 同步
//  changeOffset 0 data.length 同步

// better-scroll baseUI scroll/index 上拉、加载、更多

// 下拉刷新的时候 过程是怎么样的
// onPullDown offset 0 

// 前后端合作的要素有哪些
// 1. 接口地址 url/top/artists 请求 RESTFUL 资源暴露
// 2. 传参
// 3.接口文档


// 默认歌手清单
export const getHotSingerListRequest = count => {
    return axiosInstance.get(`/top/artists?offset=${count}`);
};
// history.push() Link
// props.match.params
export const getSingerInfoRequest = id => {
    return axiosInstance.get(`/artists?id=${id}`);
};
// 分类歌手清单
export const getSingerListRequest = (category, alpha, count) => {
    return axiosInstance.get(
        `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
    );
};

export const getHotKeyWordsRequest = () => {
    return axiosInstance.get(`/search/hot`);
};

export const getSuggestListRequest = query => {
    return axiosInstance.get(`/search/suggest?keywords=${query}`);
};

export const getResultSongsListRequest = query => {
    return axiosInstance.get(`/search?keywords=${query}`);
};


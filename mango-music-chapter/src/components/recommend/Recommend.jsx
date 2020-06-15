import React from 'react';
import './recommend.styl';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import Album from '@/components/album/Album';
import Loading from '../../common/loading/Loading';
import Scroll from '@/common/scroll/Scroll';
import Lazyload, { forceCheck } from 'react-lazyload'; // 图片延迟加载 适用于应用中很多图片
import * as AlbumModel from '@/model/album';
import { Route } from 'react-router-dom';

// 1. 路由
// 2. redux
// 3. 切页面 +js
// 4. 生命周期 + api
// 5. 公共组件

// 所有的数据请求都放到 api 目录下
import { getNewAlbum } from '../../api/recommend';
// 1. 幻灯片， Swiper
// 数据 { src, ilink }
class Recommend extends React.Component {
  constructor() {
    super()
    // 这个组件的 state， 属于这个组件， 不属于其他组件， 可以不用redux
    this.state = {
      refreshScroll: false,
      // 1. 先用假数据 把页面做出来
      // 2. 未来再改成接口
      newAlbums: [], // 数据驱动的界面
      loading: true,
      sliderList: [{
        id: 1,
        picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4012436013,1663736653&fm=26&gp=0.jpg',
        linkUrl: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B1%ED%C7%E9%B0%FC&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111'
      },
      {
        id: 2,
        picUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3631898751,3282516408&fm=26&gp=0.jpg',
        linkUrl: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B1%ED%C7%E9%B0%FC&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111'
      },
      {
        id: 3,
        picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2349951685,2269846305&fm=26&gp=0.jpg',
        linkUrl: 'https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%B1%ED%C7%E9%B0%FC&fr=ala&ala=1&alatpl=adress&pos=0&hs=2&xthttps=111111'
      }]  // 幻灯片 没有必要去 redux
    }
  }

  componentDidMount() {
    new Swiper(".slider-container", {
      loop: true,
      autoplay: {
        delay: 1000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      }
    })

    // 获取最新专辑
    // fetch 低级的
    getNewAlbum() // Promise
      .then(res => {
        // console.log('获取最新专辑')
        // console.log(res);
        // model 前端 定义结构
        // 不会加 model， 多加了一些业务代码在 component model
        let albumList = res.albumlib.data.list;
        // model
        // albumList.sort()
        this.setState({
          loading: false,
          newAlbums: albumList
        }, () => {
          this.setState({
            refreshScroll: true
          })
        })
      })

    // setTimeout(() => {
    //   this.setState({
    //     loading: false
    //   })
    // }, 3000)
  }
  render() {
    // 切页面
    // console.log(this.state.newAlbums);
    let { match } = this.props;
    let albums = this.state.newAlbums.map(item => {
      let album = AlbumModel.createAlbumByList(item);
      // console.log(album);
      return (
        <div className="album-wrapper" key={album.id}
          onClick={this.toAlbumDetail.bind(this, `${match.url + '/' + album.mId}`)}>
          <div className="left">
            <Lazyload height={60}>
              <img src={album.img} alt={album.name} width="100%" height="100%" />
            </Lazyload>
          </div>
          <div className="right">
            <div className="album-name">
              {album.name}
            </div>
            <div className="singer-name">
              {album.singer}
            </div>
            <div className="public-time">
              {album.public_time}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="music-recommend">
        {/* <Scroll> 作为父组件 */}
        <Scroll
          refresh={this.state.refreshScroll}
          onScroll={(e) => {
            // console.log(e);
            forceCheck();
          }}>
          <div>
            <div className="slider-container">
              <div className="swiper-wrapper">
                {
                  this.state.sliderList.map(slider => {
                    return (
                      <div className="swiper-slide" key={slider.id}>
                        <a href={slider.linkUrl} className="slider-nav">
                          <img src={slider.picUrl} alt="" width="100%" height="100%" />
                        </a>
                      </div>
                    );
                  })
                }
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="album-container">
              <h1 className="title">最新专辑</h1>
              <div className="album-list">
                {albums}
              </div>
            </div>
          </div>
        </Scroll>
        <Loading show={this.state.loading} title="正在加载..." />
        <Route path={`${match.url + '/:id'}`} component={Album} />
      </div>
    )
  }
  toAlbumDetail(url) {
    // console.log(url);
    this.props.history.push({
      pathname: url
    })
  }
}

export default Recommend;
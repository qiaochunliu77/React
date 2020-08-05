import hammer from 'hammerjs';//手势库

export default function WebPullToRefresh() {
    var defaults = {
        bodyEl: document.body, //最外层盒子
        contentEl: null, //内容区域
        ptrEl: null, //loading
        distance: 40,
        loadingFunction: () => {}, //返回promise 知道什么时候加载完
        resistance: 2.5, // 阻尼 移动超过100px 元素移动除以系数 100/2.5
    }

    function init(options) {
        options = {
            ...defaults,
            ...options
        }
        const h = new hammer(options.contentEl)
        h.get('pan').set({direction:hammer.DIRECTION_VERTICAL})
        h.on('panstart',_panStart);
        h.on('pandown',_panDown);
        h.on('panup',_panUp);
        h.on('panend',_panEnd);
        const ptrClass = options.ptrEl.classList;
        let pan = {}

        function _panStart() {
            console.log('panstart')
            ptrClass.add('ptr-start')
        }
        function _panDown(e) {
            console.log('pandown')
            pan.distance = e.distance / options.resistance;
            _setContentPan()
        }
        function _panUp(e) {
            console.log('panup')
            pan.distance = e.distance / options.resistance;
            _setContentPan()
        }
        function _panEnd() {
            console.log('panend')
            if(ptrClass.contains('ptr-refresh')){
                _loading()
            }else{
                _reset()
            }
        }
        function _loading() {
            options.contentEl.style.transform = 
            `translate3d(0,40px,0)`
            options.ptrEl.style.transform = 
            `translate3d(0,40px,0)`
            options.loadingFunction().then(() => {
                _reset()
            })
        }
        function _reset() {
            options.contentEl.style.transform = 
            `translate3d(0,0,0)`
            options.ptrEl.style.transform = 
            `translate3d(0,0,0)`
        }
        function _setContentPan() {
            // 页面跟随下拉的距离移动
            options.contentEl.style.transform = 
            `translate3d(0,${pan.distance}px,0)`
            options.ptrEl.style.transform = 
            `translate3d(0,${pan.distance}px,0)`

            if(pan.distance > options.distance){
                ptrClass.add('ptr-refresh')
            }else{
                ptrClass.remove('ptr-refresh')
            }
        }
    }
    return {
        init
    }
}
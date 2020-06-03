               /params(动态参数)?keywords
搜索 ？ /search/:searchTerm?a=1&b=2
详情页  /beer/:beerId
语义化设计URL /post/:postId

1. 把应用架构好 路由
2. Main -> loadBeers => loading => list
3. search/:searchTerm 路由 ->rule -> 显示
4. search/:new


注：
1. es6箭头函数this会指向外层
2. this.searchRef.current.value 获取input输入框的值 代替onchange事件
3. this.context.router.history.push(`/search/${searchTerm}`)
    形成能够跳转的新的地址
4. this.props.match.params 取得动态参数 :searchTerm
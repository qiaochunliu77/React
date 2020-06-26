import React, { Component } from 'react';
import { inject, observer} from 'mobx-react'
import { Pagination } from 'antd'
// 想要哪个store的数据就注入谁   articleStore会注入到props
@inject('articleStore')
@observer 
class Home extends Component {
    componentDidMount() {
        this.props.articleStore.getArticle('all');
    }
    handlePaginationChange = (page) => {
        this.props.articleStore.getArticle('all', page-1)
    }
    state = {  }
    render() { 
        const { total, LIMIT } = this.props.articleStore
        return ( 
            <div>
                { this.props.articleStore.article.all.length }
                <Pagination 
                onChange = {this.handlePaginationChange}
                total={total} 
                pageSize={LIMIT} 
                defaultCurrent = {1} />
            </div>
         );
    }
}
 
export default Home;
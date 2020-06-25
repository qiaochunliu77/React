import React, { Component } from 'react';
import { inject, observer} from 'mobx-react'

// 想要哪个store的数据就注入谁   articleStore会注入到props
@inject('articleStore')
@observer 
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                { this.props.articleStore.article.all.length }
            </div>
         );
    }
}
 
export default Home;
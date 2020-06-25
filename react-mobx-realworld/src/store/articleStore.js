import { observable, action } from 'mobx';
import axios from 'axios';
const LIMIT = 10;

class ArticleStore {
    // observable = state 用ob修饰过得变量 变量被修改 页面重新渲染
    // es 装饰器 
    @observable articles = {
        all: [],
        cars: []
    }
    // 由页面触发的某种行为
    @action getArticle(tag, offset)  {
        axios.get('/article', {
            params: {
                tag,
                offset,
                limit:LIMIT
            }
        })
        .then(res => {
            this.articles[tag] = res.articles
        })
    }
    
}

export default ArticleStore;

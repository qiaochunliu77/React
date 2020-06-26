import { observable, action } from 'mobx';
import axios from 'axios';
const LIMIT = 10;

class ArticleStore {
    // observable = state 用ob修饰过得变量 变量被修改 页面重新渲染
    // es 装饰器 
    LIMIT = LIMIT;
    @observable articles = {
        all: [],
        cars: []
    }
    @observable total = 0;
    // 繁琐的逻辑 写到store
    // 由页面触发的某种行为
    @action getArticle(tag, offset = 0)  {
        axios.get('/article', {
            params: {
                tag:tag === 'all'?null:tag,
                offset,
                limit:LIMIT
            }
        })
        .then(res => {
            this.articles[tag] = res.articles
            this.total = res.articlesCount
        })
    }
    
}

export default new ArticleStore();

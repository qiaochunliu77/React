// 假数据 
import Mock from 'mockjs';

export default Mock.mock('/data/', 
    'get',{
        'list|5-10':[{
         'title': '@title()',
         'finish|0-1': '1',
         'type|1-5': '1',
         'lesson|20-40': '20', //共 讲
         'learned|0-20': '2',  //已学
         'finished|0-100': '2', //学完
         'index|+1':'1',
         'image':'@image(200*200)',
        }]
        
    })

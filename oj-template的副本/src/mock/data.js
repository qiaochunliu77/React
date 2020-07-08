// 假数据 
import Mock from 'mockjs';

export default Mock.mock('/posts/', 
    'get',{
        success: true,
        title: 'lqc',
        content:'lq',
        'list|5-10':[{
         'title': '@title()',
         'email': '@email',
         'id': '@id',
         'name': '@name()',
         'Age': '@integer(18,120)',
         'Address': '@county',
         'action':'delete'
        }]
        
    })

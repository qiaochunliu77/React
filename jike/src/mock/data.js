
import Mock from 'mockjs'
export default Mock.mock('/data/','get',{
    'list|10-15':[{
       'title':'@ctitle()' ,
       'finish|1-2':1,
       'learned|0-20':1,
       'lesson|20-40':20,
       'image':Mock.Random.image('60x60', '#ecd9dd', 'Hello'),
        'finished|0-100': 1, //学完
       'type|1-5':1,
       'index|+1':1
    }]    
})

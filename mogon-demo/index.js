const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')//连接到相应的数据库，localhost为本地主机名称，playground为数据库名称，如果没有这个数据库，则自动创建(实际操作发现并不会创建)
.then(() => console.log('connect...,连接数据库中'))
.catch(() => console.error('can not connect'));

const courseSchema =new mongoose.Schema({//数据结构
    name: String,
    author: String,
    tags: [String],
    data:{ type: Date, default:Date.now},
    isPublished:Boolean
})

const Course = mongoose.model('aourse',courseSchema);//返回一个类，第一个参数是数据库的表的名称，不区分大小写，有很多的增删改查方法
//console.log(Course.find);

// 增
async function createCourse() {
    const course = new Course({//实例化这个类
        name: 'Node.js Course',
        author: 'yuands',
        tags: ['react', 'frontend'],
        isPublished: false
    })
    
    const result = await course.save();
    console.log(result);
}


//查
const getCourse  = async() => {
    //const page=2;
    //const pageSize=10;//实际会从借口中获取
    let result = await Course
    // .find({ price: { $gt: 10 } })//使用比较符
    // .find({ price: { $gt: 10,$lt: 20 } })//使用比较符
    // /find({ price: { $in: [10, 20, 30] }})//查找price等于10或者20或者30
    .find({isPublished: true,author: 'yuands',})
    //.skip()//分页功能（skip表示跳过的数据数量，例如页码从1开始的话，如果要查找第二页的数量，则要跳过第一页的数量，则skip(page-1)*pageSize，如果页码从0开始，就是说前端传0的时候，要获取第一页的数据，则skip(page*pageSize))
    //.limit(pageSize)
    .limit(10)
    .sort({_id:-1})//1表示正向排序，-1表示负向。sort中的对象，按照key的先手顺序进行依次排序处理
    .select({name:1,tags:1})//_id始终都会返回，最终一步就是select,如果只想获取数量，使用count
    //.count()
    

    
    //逻辑操作符
    // .find()
    // .or([ {name: 'yuands'}, {price: 10}])//name==yuands||price==10,and操作符类似
    
    //正则操作符
    // .find({name: /正则表达式/})  例如find({name: /^yuan/})
    console.log(result);
}

getCourse();
//createCourse();
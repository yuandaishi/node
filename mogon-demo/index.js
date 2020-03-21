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
    let result = await Course
    .find({isPublished: true,author: 'yuands',})
    .limit(10)
    .sort({_id:-1})//1表示正向排序，-1表示负向。sort中的对象，按照key的先手顺序进行依次排序处理
    .select({name:1,tags:1})//_id始终都会返回
    console.log(result);
}

getCourse();
//createCourse();
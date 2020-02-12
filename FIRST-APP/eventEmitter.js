const EventEmitter=require('events');
const emitter = new EventEmitter();

// emitter.on('messageLogged',(arg)=>{//定义监听器
//     console.log('messagelogged called',arg);
// })

const logger=()=>{
    console.log('message');
    emitter.emit('messageLogged',{id:1,url:'http://'});//发起一个事件，很多其他module在封装的时候（比如http），也发起很多的相应的事件
}

emitter.emit('messageLogged',{id:1,url:'http://'});
module.exports.logger=logger;

// emitter.on('messageLogged',()=>{//发起事件必须在定义监听器之后，不然会没有效果
//     console.log('messagelogged called');
// })
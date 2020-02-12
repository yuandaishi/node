
const EventEmitter=require('events');
const emitter= new EventEmitter();

emitter.on('messageLogged',(arg)=>{//定义监听器
    console.log('messagelogged called',arg);
})


const logger=require('./eventEmitter');//等于exports对象

logger.logger();//emit事件没有触发，这是因为使用了两个不同的EventEmitter实例

// const sayHello=(name)=>{
//     console.log(`Hello,${name}`)
// }
// sayHello('yuands')
//console.log(global)
//console.log(module);
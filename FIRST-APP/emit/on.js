// const EventEmitter=require('events');

const Logger=require('./emit');

const logObj=new Logger.logger();//logObj继承了node events的属性和方法

//console.log(logObj)

logObj.on('messageLogged',(arg)=>{
    console.log(arg);
})

logObj.log('message');//logObj对象调用了log函数，所以log函数中this.emit的this指向了logObj，logObj继承了node events的属性和方法。所以拥有emit事件
//使用箭头函数的时候，this始终指向这个类，所以也是没有问题的
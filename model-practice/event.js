const Event = require('events');
const event = new Event();

event.on('start',(a,b)=>{
    console.log('开始',a,b)
})

// 对应浏览器的点击等事件
module.exports={
    event:event
}
//event.emit('start');
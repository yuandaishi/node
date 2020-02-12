const EventEmitter=require('events');

class Logger extends EventEmitter{
    // log(message){
    //     console.log(message);
    //     this.emit('messageLogged',{id:1,url:'http://'})
    // }
    log=(message)=>{
        console.log(message);
        this.emit('messageLogged',{id:1,url:'http://'})
    }
}

module.exports.logger=Logger;
//module.exports=Logger;
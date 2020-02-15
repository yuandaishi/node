const events = require('events');

class Log extends events{
    log=()=>{
        console.log('hello');
        this.emit('message',{name:'yuands'})
    }
}


module.exports=new Log();
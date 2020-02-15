const log=require('./b');

log.on('message',(arg)=>{
    console.log('message',arg)
})

log.log();
//eventEmitter.emit('message',{name:'yuands'})
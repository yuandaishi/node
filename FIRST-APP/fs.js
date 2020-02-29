const fs=require('fs');
console.log(process)
//console.log(fs.readdirSync('./'));

var files=fs.readdir('./',(err,data)=>{//所有的异步方法都用一个函数作为最后一个参数，node会在异步完成后自动执行函数,err和data只会一个有值，另一个是null
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
const http=require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('hello world');
        res.end();
    }
    if(req.url==='/api/array'){
        res.write(JSON.stringify([0,1,2]));
        res.end();
    }
    //实际应用中不会这么写，因为当监听的url越来越多的时候，代码处理会越来越复杂
});//返回一个新的http实例，继承自事件module，所以拥有事件module的所有方法

//console.log(server);

// server.on('connection',(socket)=>{//server这个类里面封装了emit方法，所以已经监听了,一般在项目中不会这么去写，很低级
//     console.log('new connection')
// })

console.log('connection...')

server.listen(5555);
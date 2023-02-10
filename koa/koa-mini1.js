// 无next版本
const http = require("http");
class App {
  constructor() {
    //super();不是派生类，所以不需要super
    this.middlewares = [];
  }
  listen(...args) {//剩余参数位一个数组
    const server = new http.createServer(async (req,res)=>{
        const ctx = new Context(req,res);//获取请求和返回的数据,注入CTX中
        for(let i=0;i<this.middlewares.length;i++){ //如果这样写，每个use函数就会顺序执行，执行完毕之后，执行下一个use
          this.middlewares[i](ctx)
        }
        ctx.res.end(ctx.body);
    });
    server.listen(...args);
  }
  use(middleware) {
    this.middlewares.push(middleware);//middleware为一个函数
  }
}

class Context{
    constructor(req,res){
        this.req = req;
        this.res = res;
    }
}
module.exports = App;

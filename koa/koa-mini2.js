// 有next版本
const http = require("http");
const { nextTick } = require("process");
class App {
  constructor() {
    //super();不是派生类，所以不需要super
    this.middlewares = [];
  }
  listen(...args) {
    //剩余参数位一个数组
    const server = new http.createServer(async (req, res) => {
      const ctx = new Context(req, res); //获取请求和返回的数据,注入CTX中
      //this.middlewares[0](ctx,this.middlewares[1]);//递归执行到最后一个
      let i = 1;
      const next = () => {// 执行next就等于执行中间件数组中的下一个
        //返回中间件数组中的下一个
        if (i >= this.middlewares.length) {
          return async () => {};
        }
        //this.middlewares[i++].bind(null, ctx, next)(); //中间件数组中的下一个
        this.middlewares[i++](ctx,next);
      };
      if(this.middlewares.length>0){
        this.middlewares[0](ctx, next);
      }
      ctx.res.end(ctx.body);
    });
    server.listen(...args);
  }
  use(middleware) {
    this.middlewares.push(middleware); //middleware为一个函数
  }
}

class Context {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.body = "default";
  }
}
module.exports = App;

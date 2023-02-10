const Koa = require("./koa-mini1");
const app = new Koa();
app.use(async (ctx, next) => {
  //use 函数注入中间件数组中
  console.log("1");
  ctx.body = "hello world haha"; //ctx中注入其他信息
  await next();//next就是下一个push进中间件数组中的函数
  console.log("2");
});
app.use(async (ctx, next) => {
  console.log("3");
  ctx.body = "hello, world hahaha";
  await next();
  console.log("4");
});
app.listen(3000); //最后执行


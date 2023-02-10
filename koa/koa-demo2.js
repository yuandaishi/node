const Koa = require("./koa-mini2");
const app = new Koa();
app.use(async (ctx, next) => {
  //use 函数注入中间件数组中
  console.log("a");
  ctx.body = "hello world a"; //ctx中注入其他信息
  await next();//next就是下一个push进中间件数组中的函数
  console.log("b");
});
app.use(async (ctx, next) => {
  console.log("c");
  ctx.body = "hello, world b";
  await next();
  console.log("d");
});
app.use(async (ctx, next) => {
  console.log("e");
  ctx.body = "hello, world c";
  await next();
  console.log("f");
});
app.listen(3000); //最后执行


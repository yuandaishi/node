let count_1=require('./util/count');
let count_2=require('./util/count');//虽然引入了两次，但是并不会执行两次count.js，而是只执行一次，后续都是引入缓存起来的到处对象
let name=require('./util');//如果引入的JS名称是index，则可以省略文件名称

console.log(name);
//console.log(i);//这个i是访问不到的
console.log(count_1.count());//但是执行countfunctiona的时候，却能访问到,conut和i还是属于一个作用域
console.log(count_2.count());//不会初始化两次
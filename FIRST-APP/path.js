const path=require('path');
//console.log(path);

var pathObj=path.parse(__filename);
//console.log(pathObj);

var pathOne = path.join('./a','../b','c','/d','////..../f');//路劲如果出现..，则前面的路劲会被忽略，出现几个，会被忽略前面的几次,并且会规范化路径
console.log(pathOne);
var pathTwo = path.resolve('./a','../b','c','//d','./f');//相当于CD操作加上pwd操作,也会规范路径
console.log(pathTwo);
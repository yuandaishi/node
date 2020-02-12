const url=`http://mylogger.io/log`;

console.log(__filename);
console.log(__dirname);
console.log(require);

let log=(message)=>{
    //send an http request
    console.log(message)
}

module.exports.log=log;
//console.log(module)
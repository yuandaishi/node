// console.log('xxx');
// console.log(JSON.stringify(process.env,null,'\t'));
// console.log(process.env.NODE_ENV)
// setInterval(() => {
//     console.log('xxxxxxx')
// }, 1000);
// process.on('SIGTERM',()=>{
//     console.log('xxxxxxxxxxxxxxx')
// })
// setTimeout(() => {
//     // 这意味着任何待处理的回调、任何仍在发送的网络请求、任何文件系统访问、或者正在写入 stdout 或 stderr 的进程，所有这些都将立即被非正常地终止。
//     // 任何进行中的进程都会被终止
//     process.kill(process.pid, 'SIGTERM')
// }, 2000);
//console.log(process.argv)

const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.question('你叫什么名字：',name=>{
    // console.log(`你好：${name}`)
    readline.question('你的性别：',sex=>{
        readline.question('你的年龄：',age=>{

        })
    })
})


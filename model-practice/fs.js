const fs=require('fs');
fs.open('./a,txt','a',(err,fd)=>{
    // 文件描述符的第二个参数必须有，表示文件描述符对应的文件可进行的操作
    // r+ 打开文件用于读写。
    // w+ 打开文件用于读写，将流定位到文件的开头。如果文件不存在则创建文件。
    // a 打开文件用于写入，将流定位到文件的末尾。如果文件不存在则创建文件。
    // a+ 打开文件用于读写，将流定位到文件的末尾。如果文件不存在则创建文件。
    if(err){
        throw err
    }else{
        console.log(fd);
        fs.write(fd,'床前明月光','utf8',(err,data)=>{
            console.log(err,data)
        })
    }
})
getMessage = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //resolve('1');
            reject(new Error('error'));
        }, 300);    
    })
}

// result = async() => {
//     let res = await getMessage();
//     console.log(`res:${res}`);
// }

result = async() => {
    try {
        let res = await getMessage();
        console.log(`res:${res}`);
    } catch (error) {
        console.log(error)
    }
}

result();
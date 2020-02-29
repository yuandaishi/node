const morgan = require('morgan');
const debugOne = require('debug')('app:startup');
const debugTwo = require('debug')('app:db');
const express = require('express');
const Joi = require('@hapi/joi');
const app = express();
const {logger} = require('./logger');
const config = require('config');
app.use(express.json());//中间件
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    //debug('调试信息')//console.log()
}

debugOne('one');
debugTwo('two');
console.log(process.env)//不设置的时候，process显示的是undefined，而app.get显示的是development
console.log(config.get('name'),config.get('mail.host'))//如果当前的NODE_ENV==文件的名称，则获取该文件中的信息

const data = [
    {
        name: 'yuands',
        id: 1
    },
    {
        name: 'yuands',
        id: 2
    },
    {
        name: 'yuands',
        id: 3
    },
]

//使用自定义中间件
app.use(logger('加载中'));//这里用的是函数名，而不是执行函数
app.use(express.static('public'));//所有请求都会经过这个中间件

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/api/arr', (req, res) => { 
    res.send([0, 1, 2, 3])
})
app.get('/api/arr/:year/:month', (req, res) => {
    //res.send(req.params);
    res.send(req.query);
})
app.get('/api/arr/:id', (req, res) => {
    //res.send(req.params);
    const result = data.find(c => c.id === parseInt(req.params.id))
    if (!result) {//不设置这段代码的话，如果路径符合上述任何一个API地址的话，则返回的状态码是200,如果路径中没有符合的，则返回400
        res.status(404).send('找不到相应的内容')
    }
    res.send(result);
})
//处理post请求
app.post('/api/arr',(req, res) => {//post请求放在请求体中
    const valite = {
        name:Joi.string().min(3)
    }
    const result = Joi.validate(req.body,valite);
    console.log(result);
    if (result.error) {
        res.status(400).send('请求发送的字段不符合规则');
        return;
    }
    const newData={
        id: data.length + 1,
        name: req.body.name
    }
    data.push(newData);
    res.send(data);
})
//处理put请求
app.put('/api/arr',(req, res) => {//post请求放在请求体中
    const result = data.find(c => c.id === parseInt(req.params.id))
    if (!result) {//不设置这段代码的话，如果路径符合上述任何一个API地址的话，则返回的状态码是200,如果路径中没有符合的，则返回400
        res.status(404).send('找不到相应的内容')
    }
    const valite = {
        name:Joi.string().min(3)
    }
    const resultJoi = Joi.validate(req.body,valite);
    if (resultJoi.error) {
        res.status(400).send('请求发送的字段不符合规则');
        return;
    }
    result.name=req.body.name
    res.send(data);
})
const port = process.env.PORT || '5555';
app.listen(port, () => {
    console.log('connectting...')
})

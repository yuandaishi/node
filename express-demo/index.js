const morgan = require('morgan');
const debugOne = require('debug')('app:startup');
const debugTwo = require('debug')('app:db');
const express = require('express');
const Joi = require('@hapi/joi');
const {logger} = require('./logger');
const {index, arr} = require('./router/out');
const config = require('config');
const app = express();

app.set('view engine', 'pug');//设置模板引擎
app.set('views', './views');//模板引擎放置在什么位置，默认就是views文件夹
app.use(express.json());//中间件
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    //debug('调试信息')//console.log()
}

debugOne('one');
debugTwo('two');

//使用自定义中间件
app.use(logger('加载中'));//这里用的是函数名，而不是执行函数
app.use(express.static('public'));//所有请求都会经过这个中间件

app.use('/',index);//告诉express我们传入的路径，以及使用哪个router来处理这个路径的逻辑
app.use('/api/arr',arr);//相当于执行中间件

const port = process.env.PORT || '5555';
app.listen(port, () => {
    console.log('connectting...')
})

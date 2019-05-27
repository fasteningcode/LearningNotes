const logger = require('./logger');
const _ = require('underscore');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname +'/public'));

logger.log('hello world');
logger.log(_.first([5,3,4,8]));

app.get('/',(req,res)=>{
    res.send("Hello Express");
});

app.post('/hello',(req,res)=>{
    let body = req.body;
    body.message = "Hello " + body.name;

    res.json(body);
});

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
});

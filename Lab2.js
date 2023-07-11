var _cal = require('./Caculator')
//Add thư viện
var express = require('express');
var app = express();

app.get('/calADD', function(req,res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.add(a,b);
    res.json(rs); 

});
app.get('/calSUB', function(req,res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.sub(a,b);
    res.json(rs); 

});
app.get('/calMUL', function(req,res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.mul(a,b);
    res.json(rs); 

});
app.get('/calDIV', function(req,res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.div(a,b);
    res.json(rs); 

});
app.listen(8603);  
// var a = 10;
// var b = 5;
// console.log('add result: '+ _cal.add(a,b));
// console.log('sub result: '+ _cal.sub(a,b));
// console.log('mul result: '+ _cal.mul(a,b));
// console.log('div result: '+ _cal.div(a,b));
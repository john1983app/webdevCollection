var express = require('express');
 
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/myroute',function(req,res){
    res.send('This is Get method');
    res.end();
});

app.post('/myroute',function(req,res){
    res.send('This is POST method');
    res.end();
});

app.listen(12345);
console.log('server has been created in local:12345');

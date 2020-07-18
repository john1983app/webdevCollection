var express = require('express');
 
var app = express();
var port = process.env.PORT || 3000;
var message = [];
app.use(express.static( __dirname + '/static'));
app.use(function(req,res){
	res.sendFile(__dirname +'/static/index.html');
});
var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection',function(socket){
	socket.on('getAllMessages',function(){
		socket.emit('allMessages',messages);
	})
	socket.on('createMessages',function(message){
		message.push(message);
		io.sockets.emit('messageAdded',message);
	})
	socket.emit('connected');
})
console.log('TechNode is on port' + port+'!');


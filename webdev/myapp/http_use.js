var app = require('express')();
//var SerialPort = require('serialport');
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var fs = require('fs');
/*
var port = new SerialPort('/COM3', {
  baudRate: 57600
});
*/
app.get('/myhome',function(req,res){
  res.sendFile(__dirname + '/CodeGenerator.html');
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat_client.html');
});

/*
port.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message);
  }
  // Because there's no callback to write, write errors will be emitted on the port:
  port.write('main screen turn on');
});

// The open event is always emitted
port.on('open', function() {
  // open logic
  console.log('port opened!!');
});
//port.on('data', function (data) {
//  console.log('Dataaa:', data);
//});
//]
// Read data that is available but keep the stream from entering "flowing mode"
port.on('data', function () {
	var rxdata =[];
	rxdata = port.read();
  console.log('Data:'+rxdata);

});

io.on('connection', function(socket){
  var self = this;
  var echo = [];
  console.log('a user connected');
  socket.on('chat_message', function(msg){
	port.write(msg,function(err){
	  if(err){
		return console.log('Error on write: ', err.message);
	  }
	  console.log('message written');
	});
	echo = msg;
	socket.emit('server_echo',echo);
    console.log('server_echo:' + echo);
  });
  
  
});
*/
http.listen(3000, function(){
  console.log('listening on *:3000',);
});
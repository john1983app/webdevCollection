var a= 
{
	"command":["ls","dir","pwd"],"args":["","/w"]
}
var net = require('net');
var child_process = require('child_process');

var server = new net.createServer();

server.listen(56789);

server.on('connection',function(socket){
	var child = null;
	var cmdstr = '';
	//---receive client cmd 
	socket.on('data',function(data){
		cmdstr += data.toString();
		if(data.toString().indexOf('\n')== -1){
			return;
		}
		var cmd = JSON.parse(data);
		child = child_process.spawn(cmd.command,cmd.args);
		
		child.stdout.on('data',function(output){
		    socket.write(output);
		});
		child.on('end',function(){
			socket.destroy();
			child = null;
		});
	});
	
	socket.on('end',function(){
		if(child) child.kill();
	});
	console.log('New connection was established!');
});

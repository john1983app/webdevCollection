
var net = require('net');
//{
	//"cmd":[{"command":"ls","args"},{"command":"ls","args"}]
//}
var cmd = {
	"command":process.argv[2],
	"args":[]
};
console.log(process.cwd());
for(var i=2;i<process.argv.length;i++){
	cmd.args.push(process.argv[i]);
}
var socket = new net.Socket();


socket.connect(56789,'127.0.0.1',function(){
	console.log('connect');
	socket.write(JSON.stringify(cmd));
	console.log('JSON writed');
	socket.on('data',function(data){
		console.log(data.toString());
	});
	socket.on('end',function(){
		process.exit();
	});
	
});

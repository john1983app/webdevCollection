console.log('start');
var i;
for(i=0;i<10;i++){
setTimeout(function(){
	console.log('trigger');
},10000);
}
console.log('end');
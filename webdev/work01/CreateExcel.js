var fs = require('fs');
var officegen = require('officegen');

var xlsx = officegen('xlsx');
xlsx.name = 'MyDemoExcel';

var sheet = xlsx.makeNewSheet();
sheet.data[10] = []
sheet.data[10][2]='HELLO';
sheet.setCell('B4','CreateByNodeJs');

var output = fs.createWriteStream('MyDemo.xlsx');
xlsx.generate(output);
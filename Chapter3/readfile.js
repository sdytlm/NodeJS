// readfile.js
// 异步I/O

var fs = require('fs');
fs.readFile('file.txt', 'utf-8', function(err,data) {
	if(err) 
		console.error(err);
	else
		console.error(data);
});

console.log('end.');


// hello.js
/*
console.log('Hello World');
console.log('%s: %d', 'Hello', 25);
*/
// node can open a shell for debug

// app.js
/*
var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>Node.js</h1>');
	res.end('<p>Hello World</p>');
}).listen(3000);
console.log("HTTP server is listening at port 3000.");
*/

// readfile.js
// 异步I/O
/*
var fs = require('fs');
fs.readFile('file.txt', 'utf-8', function(err,data) {
	if(err) 
		console.error(err);
	else
		console.error(data);
});
console.log('end.');
*/

// readfilecallback.js
// 单独定义回调函数
function readFileCallBack(err, data) {
	if (err)
		console.error(err);
	else
		console.log(data);
}

var fs = require('fs');
fs.readFile('file.txt', 'utf-8', readFileCallBack);
console.log('end.');

// readfilesync.js
// 同步I/O
/*
var fs = require('fs');
var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
console.log('end.');
*/

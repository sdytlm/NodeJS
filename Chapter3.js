// hello.js
/*
console.log('Hello World');
console.log('%s: %d', 'Hello', 25);
*/
// node can open a shell for debug
------

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
------

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
------

// readfilecallback.js
// 单独定义回调函数
/*
function readFileCallBack(err, data) {
	if (err)
		console.error(err);
	else
		console.log(data);
}

var fs = require('fs');
fs.readFile('file.txt', 'utf-8', readFileCallBack);
console.log('end.');
*/
------

// readfilesync.js
// 同步I/O
/*
var fs = require('fs');
var data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
console.log('end.');
*/
------

// event.js
// I/O 操作完成后会发送一个`事件`到事件队列。所有的事件由EventEmitter对象提供.
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function() {       // 注册一个事件some event
	console.log('some_event occured.');
});

setTimeout(function() {                  // timer 向event发送事件some_event
	event.emit('some_event');}, 1000);

/* Note:
Node.js 程序由事件循环开始,到事件循
环结束,所有的逻辑都是事件的回调函数,所以 Node.js 始终在事件循环中,程序入口就是 事件循环第一个事件的回调函数。事件的回调函数在执行的过程中,可能会发出 I/O 请求或 直接发射(emit)事件,执行完毕后再返回事件循环,事件循环会检查事件队列中有没有未 处理的事件,直到程序结束。
*/

/*
Node.js 提供了 require 函数来调用其他模块
For example: var http = require('http').
*/




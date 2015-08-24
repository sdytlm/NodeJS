// event.js
// I/O 操作完成后会发送一个`事件`到事件队列。所有的事件由EventEmitter对象提供.
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function() {       // 注册一个事件some event
	console.log('some_event occured.');
});

setTimeout(function() {                  // timer 向event发送事件some_event
	event.emit('some_event');}, 1000);


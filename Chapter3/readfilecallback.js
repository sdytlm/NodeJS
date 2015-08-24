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



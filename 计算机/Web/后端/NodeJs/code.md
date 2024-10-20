# 事件循环
```JavaScript
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('someEvent', function () {
    console.log('someEvent have been triggered');
})
var listener = function () {
    console.log('This is a listener');
}

event.addListener('someEvent', listener);
event.once('someEvent', function () {
    console.log('This is a once listener');
})
event.on('error', function () { });
event.emit('error');

console.log('====first====');
event.emit('someEvent');
console.log('=====second====');
event.emit('someEvent');
```

# 案例：通过事件绑定实现web服务器路由
```JavaScript
var http = require('http');
var util = require('util');
var url = require('url')
var events = require('events')
var fs = require('fs')
var port = 8887;

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter()

// route 根路径
eventEmitter.on('/', function (method, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Hello World\n')
})

// route /hello
eventEmitter.on('/hello', function (method, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    data = fs.readFileSync('./index.html')
    response.end(data.toString());

})

// page 404
eventEmitter.on('404', function (method, url, response) {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end('<h1 style="text-align:center"> 404 Not Found </h1>')
})
// 启动服务
http.createServer(function (request, response) {
    console.log(request.url)

    // 路由
    if (eventEmitter.listenerCount(request.url) > 0) {
        eventEmitter.emit(request.url, request.method, response)
    } else {
        eventEmitter.emit('404', request.method, request.url, response)
    }
}).listen(port)

console.log(util.format('Server running at http://127.0.0.1:%d/', port))
```
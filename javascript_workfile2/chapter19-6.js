// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 웹서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(app.router);

// 라우트합니다. router middleware
app.all('/a', function(request, response){
	response.send('<h1>Page A</h1>')
});
app.all('/b', function(request, response){
	response.send('<h1>Page B</h1>')
});
app.all('/c', function(request, response){
	response.send('<h1>Page C</h1>')
});

// 웹서버를 실행합니다.
http.createServer(app).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});
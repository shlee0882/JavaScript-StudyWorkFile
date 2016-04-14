// 웹서버 만들기
// npm install express@3.4.7

var http = require('http');
var express = require('express');

// 모듈을 추출합니다.

var http = require('http');
var express = require('express');

// 웹 서버를 생성합니다.
// 미들웨어 데이터 전달
var app = express();
app.use(function(request, response, next){
	request.test = 'request.test';
	response.test = 'response.test';
	console.log('first');
	next();
});

app.use(function(request, response, next){
	response.send('<h1>'+request.test+'::'+response.test+'</h1>');
	// response.send('<h1>Hello Middleware!</h1>');
});

// app.use() 메서드의 콜백함수를 미들웨어라고 부른다.

// 웹 서버를 실행합니다.

http.createServer(app).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});

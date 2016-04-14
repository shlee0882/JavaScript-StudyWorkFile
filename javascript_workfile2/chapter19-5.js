// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 웹서버를 생성합니다.
var app = express();
// express.static() 메서드의 매개변수에는 제공할 파일이 들어있는 폴더이름 입력.
app.use(express.static('public'));
app.use(function(request,response){
	response.send('<h1>Hello Middleware .. !</h1>');
});
// app.use(express.static('public'));

// 웹서버를 실행합니다.
http.createServer(app).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});

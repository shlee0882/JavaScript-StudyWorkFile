// 모듈을 추출합니다.
var request = require('request');
// 웹 페이지를 긁습니다.
request('http://www.google.com',function(error, response, body){
	console.log(body);
});
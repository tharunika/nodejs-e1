var http = require('http');
var sums = require('./ques1')
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Sum of two numbers is :' + sums.sumAndAverage(123, 321));
res.end();
}).listen(8000);

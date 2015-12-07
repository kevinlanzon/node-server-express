var express = require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);

app.get('/', function(request, response) {
  response.json("Hello world");
});

app.get('/page1', function(request, response) {
  response.send('<title>title</title><p>page 1</p>');
});

server.listen(3000, function(){
  console.log('Server listening on port 3000');
});

module.exports = server;

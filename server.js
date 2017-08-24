var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views', 'index.html'));
});

app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});
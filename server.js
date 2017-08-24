var express = require('express');
var app = express();
var path = require('path');
var fileUpload = require('express-fileupload');

app.use(fileUpload());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views', 'index.html'));
});

app.post('/upload', function (req, res) {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  var sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv('uploads/' + req.files.sampleFile.name, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('File uploaded!');
  });
});

app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});
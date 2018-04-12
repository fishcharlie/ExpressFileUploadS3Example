// Requiring packages and resources we need
var express = require('express');
var app = express();
var path = require('path');
var fileUpload = require('express-fileupload');
var s3 = require('s3');
var keys = require('./keys.js');
var fs = require('fs');

// Creating S3 client
var client = s3.createClient({
	maxAsyncS3: 20, // this is the default 
	s3RetryCount: 3, // this is the default 
	s3RetryDelay: 1000, // this is the default 
	multipartUploadThreshold: 20971520, // this is the default (20 MB) 
	multipartUploadSize: 15728640, // this is the default (15 MB) 
	s3Options: {
		// Using the keys from our AWS IAM user
		accessKeyId: keys.s3accesskey,
		secretAccessKey: keys.s3secretaccesskey,
		
		// any other options are passed to new AWS.S3() 
		// See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property 
	},
});

// This is Express.js middleware to parse and handle the files we upload from our HTML page
app.use(fileUpload());

// Sending the HTML file when the user goes to `http://localhost:3000/`
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/views', 'index.html'));
});

// Post route to handle uploading of a file
app.post('/upload', function(req, res) {
	// Sending error back when no files were uploaded
	if (!req.files) {
		return res.status(400).send('No files were uploaded.');
	}

	// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file (this must match the HTML name attribute on the input element)
	var sampleFile = req.files.sampleFile;
	
	var newFileName = Date.now() + req.files.sampleFile.name; // creating unique file name based on current time and file name of file uploaded, that way if two people upload the same file name it won't overwrite the existing file
	
	// Use the mv() method to place the file somewhere on your server (in this case we are placing it to the `uploads` folder with the name that we just created above, newFileName)
	sampleFile.mv('uploads/' + newFileName, function(err) {
		// If there was an error send that back as the response
		if (err) {
			return res.status(500).send(err);
		}

		// Upload to S3
		var params = {
			// The file on our server that we want to upload to S3
			localFile: 'uploads/' + newFileName,
			
			
			s3Params: {
				Bucket: keys.s3bucket,
				Key: newFileName, // File path of location on S3
			},
		};
		var uploader = client.uploadFile(params);
		// On S3 error
		uploader.on('error', function(err) {
			// On error print the error to the console and send the error back as the response
			console.error("unable to upload:", err.stack);
			res.status(500).send(err.stack);
		});
		// On S3 success
		uploader.on('end', function() {
			// Print done uploading on success
			console.log("done uploading");
			// Send back a success message as the response
			res.send('File uploaded!');
			//Removing file from server after uploaded to S3
			fs.unlink('uploads/' + newFileName);
		});
	});
});

// Setup Express.js server to listen on port 3000
app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});

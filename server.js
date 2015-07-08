/*
author: Sredna Kunowski 7/7/2015

A simple HTTP server that will open up index.html or error.html.
*/

//node includes http methods and file system methods
var http = require("http");
var file = require("fs");

//makeing a global variable to store the value of data
var htmlFile = null;

//opening my index.html
file.readFile('./index.html', function(err, data) 
{	
	//if there is an error exit the server
	if (err) throw err;
	htmlFile = data;
});

var errorFile = null;

file.readFile('./error.html', function(err, data)
{
	if (err) throw err;
	errorFile = data;

});
	
var httpHandler = function(request, response) {
	
	if (request.url === "/")
	{
		response.writeHead(200, {"content-Type": "text/html"});
		response.write(htmlFile);
		response.end();
	}
	else
	{
		response.writeHead(404, {"content-Type": "text/html"});
		response.write(errorFile);
		response.end();
	}
}

var httpServer = http.createServer(httpHandler);
httpServer.listen(8080);
console.log("Whoaaaaa server 8080 at your service!!");

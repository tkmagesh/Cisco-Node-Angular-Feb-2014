var http = require("http"),
	path = require("path"),
	fs = require("fs"),
	querystring = require("querystring"),
	url = require("url");

var tasks = [];
var server = http.createServer(function(req,res){
	console.log(req.method);
	if (req.method === "GET"){
		var resourceRequested = path.join(__dirname, url.parse(req.url).pathname);
		console.log("a new connection is established for ", resourceRequested);
		if (!fs.existsSync(resourceRequested)) {
			res.writeHead(404);
			res.end();
			return;
		} else {
			res.writeHead(200);
			fs.createReadStream(resourceRequested, {encoding : "utf-8"}).pipe(res);
		}
	} else {
		var reqData = '';
		req.on('data',function(chunk){
			reqData += chunk;
		});
		req.on('end',function(){
			var data = querystring.parse(reqData);
			tasks.push(data.txtTask);
			res.writeHead(200);
			res.write(tasks.length + " tasks are there to be worked on");
			res.write("<a href='TaskManager.html'>Task Manager</a>");
			res.end();
		});
	}
});
server.listen(8080);
var http = require("http");
http.createServer(function(req,res){
	res.write("Hi there!!");
	res.end();
}).listen(9191);
console.log("Server running on port 9191");
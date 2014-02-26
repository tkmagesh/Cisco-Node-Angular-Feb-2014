var webSocket = require('nodejs-websocket');
var server = webSocket.createServer(function(conn){
	conn.on("text",function(msg){
		server.connections.forEach(function(con){
			con.sendText(msg);
		});	
	});
});
server.listen(9090);
console.log("Socket server listening on port 9090");
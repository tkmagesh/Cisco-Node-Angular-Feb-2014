var fs = require("fs");
var fileName = "sample.txt";
var stream = fs.createReadStream(fileName,{encoding : 'utf8'});
var chunksRead = 0;
stream.on('data',function(chunk){
	++chunksRead;
	console.log(chunk);
});
stream.on('end',function(){
	console.log("----Done----- with " + chunksRead + " chunks read");
});
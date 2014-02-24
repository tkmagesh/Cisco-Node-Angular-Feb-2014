function sum(){
	function parseArg(n){
		if (!isNaN(n)) return parseInt(n);	
		if (typeof n === "function") return parseArg(n());
		if (!!n.length){
			var result = 0;
			for(var i=0;i<n.length;i++)
				result += parseArg(n[i]);
			return result;		
		}
		return 0;
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;
}
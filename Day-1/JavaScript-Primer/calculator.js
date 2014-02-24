function sum(){
	function parseArg(n){
		if (!isNaN(n)) return parseInt(n);	
		if (typeof n === "function") return parseArg(n());
		if (!!n.length) return sum.apply(this,n);
		return 0;
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) 
		: parseArg(arguments[0]) 
		+ sum.apply(this,[].slice.call(arguments,1));
}

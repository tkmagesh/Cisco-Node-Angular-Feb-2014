function Calculator(){

}
Calculator.prototype.add = function(x,y){
	this.result = x + y;
};
Calculator.prototype.subtract = function(x,y){
	this.result = x - y;
};
Calculator.prototype.multiply = function(x,y){
	this.result = x * y;
};
Calculator.prototype.divide = function(x,y){
	this.result = x / y;
};
module.exports = Calculator;
define(function(require, exports, module) {
	function Hello(param) {
		this.param = param;
	}
	module.exports = Hello;
	Hello.prototype.say = function() {
		alert('hello ' + this.param);
	}
});
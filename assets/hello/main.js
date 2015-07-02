define(function(require, exports, module) {

	function Hello(param) {
		this.param = param;
	}

	module.exports = Hello;

	Hello.prototype.say = function() {
		document.getElementById('test').innerHTML = "Hello World!";
	}

});
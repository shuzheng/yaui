define(function(require, exports, module) {
	//console.log(module.uri);
	//console.log(require.resolve('./hello'));
	// 通过 require 引入依赖
	var Hello = require('./hello');
	var h = new Hello('world!');
	h.say();
});


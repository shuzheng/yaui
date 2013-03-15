/**
*	Copyright (c) 2011, Yaui.net All rights reserved.
*
*	2011-06-30
*
*	Author:Yaui
*
*	Home：http://www.Yaui.net/
*/
define(function(require, exports, module) {
	// 通过 require 引入依赖
	var Hello = require('./hello/main');
	var h = new Hello('world!');
	h.say();
});
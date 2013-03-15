$(document).ready(function(){
	$("<a id='totop'>▲</a>").appendTo("#footer");
	$("#totop").click(function(){
		if($.browser.safari){
			$("body").animate({scrollTop:0}, '200'); 
		}else{
			$("html").animate({scrollTop:0}, '200');
		}
	});
	$(window).bind('scroll',function(){
		$(this).scrollTop()>0?$('#totop').fadeIn(200):$('#totop').fadeOut(200);
	});
});
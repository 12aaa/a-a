$(function(){
	//获取屏幕宽度
	function funSize(){
		var wWth=$(window).outerWidth();
		$("html").css({"font-size":wWth/10})
	}
		
	funSize();
		
	$(window).resize(function(){
		funSize();
	})
	
	
	
	
	//当前页面高亮显示
	var url=document.URL.split("/")[document.URL.split("/").length-1].substr(0,4);
	$(".ftNav li a[href^='"+url+"']").parent("li").addClass("active").siblings().removeClass("active");
	
	
	
	
	
	
})
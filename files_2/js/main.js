window.onload = function() { 
	// partners logo滑动效果
	var logoTime = setInterval(logoScroll,3000);
	$(".logo-box li").hover(function () {
		clearInterval(logoTime);
	},function () {
		logoTime = setInterval(logoScroll,3000);
	});

	//  silder 展示图 滑动效果
	var picTime = setInterval(picScroll,8000);
		// 悬停则暂停滑动
	$(".silder").hover(function () {
		clearInterval(picTime);
	},function () {
		picTime = setInterval(picScroll,8000);
	});
		//  控制按钮
		//  上一个
	$(".previous").click(function () {
		clearInterval(picTime);
		$(".pic-box ul").animate({"top":"0"},"slow",function () {
			$(".pic-box ul li:last-child").prependTo($(".pic-box ul"));
			$(".pic-box ul").css({"top":"-580px"});
		});
		picTime = setInterval(picScroll,8000);
	});
		//  下一个
	$(".next").click(function () {
		clearInterval(picTime);
		picScroll();
		picTime = setInterval(picScroll,8000);
	});

	//  回到顶端
	$("#back-top").click(function(){
		 $('body,html').animate({ scrollTop: 0 }, 500);
	});
}; 



function picScroll() {
	var top = parseInt($(".pic-box ul").css("top"));
	$(".pic-box ul").animate({"top":"-1060px"},"slow",function () {
		$(".pic-box ul li:eq(0)").appendTo($(".pic-box ul"));
		$(".pic-box ul").css({"top":"-580px"});
	});
}

function logoScroll() {
	$(".logo-box").animate({"left":"-200px"},"slow",function () {
		$(".logo-box li:eq(0)").appendTo($(".logo-box"));
		$(".logo-box").css({"left":0});
	})
}

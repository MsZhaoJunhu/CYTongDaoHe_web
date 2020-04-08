$('.title p button').click(function(){
	$(this).addClass('selected').siblings().removeClass('selected')
	$('.zlhb_content .zlhb_item').eq($(this).index()).css('display','flex').siblings().hide()
})
$('.zlhb_item span').hover(function(){
	$(this).children('img').attr("src","img/hzhb_logo_hover/logo ("+($(this).index()+1)+").png")
},function(){
	$(this).children('img').attr("src","img/hzhb_logo/logo ("+($(this).index()+1)+").png")
})
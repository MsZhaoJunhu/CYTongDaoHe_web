$('.top span').click(function(){
    $('#after').animate({'left':($(this).index()*209)+'px'},250)
    $('.bottom>div').eq($(this).index()).show().siblings('div').hide()
})
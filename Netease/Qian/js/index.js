$(function (){
	$('.block').css('display','none');
	$('#loadingAnim').css('display','block');
	$('.slide').css('display','none');
	$('.arrow').css('display','none');
	
	var wait=$('#wait');
	var time=0;
	var interval=setInterval(function (){
		
		if(time>100){
			$('.block').css('display','block');
			$('#loadingAnim').css('display','none');
			$('.slide').css('display','block');
			$('.arrow').css('display','block');
			clearInterval(interval);
		}
		wait.html(time++);
	},40);


    $('#fullpage').fullpage({
        afterLoad:function (a,key){
            $('.section').removeClass('current');
            setTimeout(function (){
                $('.section').eq(key-1).addClass('current');
            },200);                      
        }
    });
    var video = $('video')[0];
    $('.player-pl').on('click',function (){
    	 if(video.paused) {
                video.play();
                $(this).addClass('player-pause').removeClass('player-pl');         
            } else {
                video.pause();
                $(this).addClass('player-pl').removeClass('player-pause');
            }

    });

	$('.big_banner > div:eq(0)').addClass('block');
    $('.main-uu>li').mouseenter(function (){
    	var index=$(this).index();
    	$(this).find('a').addClass('active').end().siblings('li').find('a').removeClass('active');
    	$('.big_banner > div:eq('+index+')').addClass('block').siblings('div').removeClass('block');
    	$('.big_banner > div:eq('+index+')').addClass('act').siblings('div').removeClass('act');
    });

});

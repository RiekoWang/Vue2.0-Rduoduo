/**
 * Created by Rieko on 17-10-26.
 */
;
$(function(){
	(function() {
//		首页
		$('.content').scroll(function() {
			if($('.content').scrollTop() > 500) {
				$('.W-hui').fadeIn();
			} else {
				$('.W-hui').hide();
			}
		});
		$('.W-hui').on('click', function() {
			$('.content').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
		
//		活动
		$('.W-m-box,.W-m-nr').each(function(){
			if($(this).find('.W-baiF i').text()=='100%'){
				$(this).find('.W-btnq').css('background','#bbbbbb').text('已抢光');
			}
			$(this).find('.W-baiF span').css('width',$(this).find('.W-baiF i').text());
		});
		
		$('.W-huo-x ul li').on('click touchstart',function(){
			$('.W-huo-nr').hide();
			$('.W-huo-nr').eq($(this).index()).show();
			$('.W-huo-x ul li').removeClass('H-active');
			$('.W-huo-x ul li i').hide();
			$(this).addClass('H-active');
			$(this).find('i').show();
		});
//		分类
		$('.W-Hlist').find('li').on('click touchstart',function(){
			$('.W-Fnr').hide();
			$('.W-Fnr').eq($(this).index()).show();
			$('.W-Hlist').find('li').removeClass('W-Hliactive');
			$('.W-Hlist').find('li span').removeClass('W-Hspanactive');
			$(this).addClass('W-Hliactive');
			$(this).find('span').addClass('W-Hspanactive');
		});
		
//		购物车
		var arr=[];
		var ZClass = 0;
		$('.car-left i').css('line-height',$('.car-ul li').height()+'px');
		$('.car-left i').on('click',function(){
			if($(this).hasClass('i-active')){
				$(this).removeClass('i-active');
				ZClass -= parseFloat($(this).parents('.car-left').nextAll('.car-right').find('input').val());
				$('.W-Total .Total-l-p').find('i').text("¥"+ZClass);
				arr.pop();
			}else{
				$(this).addClass('i-active');
				ZClass += parseFloat($(this).parents('.car-left').nextAll('.car-right').find('input').val());
				$('.W-Total .Total-l-p').find('i').text("¥"+ZClass);
				arr.push(1);
			};
			if(arr.length==$('.car-left i').length){
				$('.Total-l .fa-check-square-o').addClass('i-active');
			}else{
				$('.Total-l .fa-check-square-o').removeClass('i-active');
			}
		});
		
		$('.Total-l .fa-check-square-o').on('click',function(){
			ZClass=0;
			if($(this).hasClass('i-active')){
				$(this).removeClass('i-active');
				$.each($('.car-left i'), function() {
					$(this).removeClass('i-active');
				});
				$('.W-Total .Total-l-p').find('i').text("¥"+ZClass);	
			}else{
				$.each($('.car-left i'), function() {
					$(this).addClass('i-active');
					ZClass += parseFloat($(this).parents('.car-left').nextAll('.car-right').find('input').val());
				});
				$(this).addClass('i-active');
				$('.W-Total .Total-l-p').find('i').text("¥"+ZClass);
				
			}
		});
		var Zong=null;
		$('.car-right').find('.reduce').on('click',function(){
			var reduceNumber = $(this).next('span').text();
			if($(this).next('span').text()==1){
				return false;
			}else{	
				$(this).next('span').text(--reduceNumber);
			};
			Zong =reduceNumber* parseFloat($(this).parents('.car-right').prevAll('.car-left').find('.car-left-nr span').text().replace(/[^\d.]/g,''));                     
			$(this).nextAll('input').val(Zong);
			if($(this).parents('.car-right').prevAll('.car-left').find('.fa-check-square-o').hasClass('i-active')){
				ZClass -= parseFloat($(this).parents('.car-right').prevAll('.car-left').find('.car-left-nr span').text().replace(/[^\d.]/g,''));
				$('.W-Total .Total-l-p').find('i').text("¥" + ZClass);
			};	
		});
		
		$('.car-right').find('.plus').on('click',function(){
			var plusNumber = parseInt($(this).prev('span').text());
			$(this).prev('span').text(++plusNumber);
			Zong =plusNumber* parseFloat($(this).parents('.car-right').prevAll('.car-left').find('.car-left-nr span').text().replace(/[^\d.]/g,''));                     
			$(this).nextAll('input').val(Zong);
			if($(this).parents('.car-right').prevAll('.car-left').find('.fa-check-square-o').hasClass('i-active')){
				ZClass += parseFloat($(this).parents('.car-right').prevAll('.car-left').find('.car-left-nr span').text().replace(/[^\d.]/g,''));
				$('.W-Total .Total-l-p').find('i').text("¥"+ZClass);
			};
		});
		
	})();
})

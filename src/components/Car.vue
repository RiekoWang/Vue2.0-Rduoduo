<template>
	<div class="Gcar">
		<div class="content">
			<div class="W-car-nr">
				<ul class="car-ul">
					<li>
						<div class="car-box">
							<div class="car-left">
								<i class="fa-check-square-o fa f-l"></i>
								<img src="../assets/img/car-img1.jpg" width="30%" class="f-l" />
								<div class="car-left-nr f-l">
									<h4>整只鸡新鲜肉类生鲜活鸡</h4>
									<p>一盒装</p>
									<span>¥30</span>
								</div>
								<div class="clear"></div>
							</div>
							<div class="car-right">
								<span class="reduce">-</span>
								<span>1</span>
								<span class="plus">+</span>
								<input type="hidden" value="30" />
							</div>
						</div>
					</li>
					<li>
						<div class="car-box">
							<div class="car-left">
								<i class="fa-check-square-o fa f-l"></i>
								<img src="../assets/img/car-img3.jpg" width="30%" class="f-l" />
								<div class="car-left-nr f-l">
									<h4>整只鸡新鲜肉类生鲜活鸡</h4>
									<p>一盒装</p>
									<span>¥20</span>
								</div>
								<div class="clear"></div>
							</div>
							<div class="car-right">
								<span class="reduce">-</span>
								<span>1</span>
								<span class="plus">+</span>
								<input type="hidden" value="20" />
							</div>
						</div>
					</li>
					<li>
						<div class="car-box">
							<div class="car-left">
								<i class="fa-check-square-o fa f-l"></i>
								<img src="../assets/img/car-img2.jpg" width="30%" class="f-l" />
								<div class="car-left-nr f-l">
									<h4>整只鸡新鲜肉类生鲜活鸡</h4>
									<p>一盒装</p>
									<span>¥10</span>
								</div>
								<div class="clear"></div>
							</div>
							<div class="car-right">
								<span class="reduce">-</span>
								<span>1</span>
								<span class="plus">+</span>
								<input type="hidden" value="10" />
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!--回顶部-->
			<HuiView></HuiView>
		</div>

		<!--合计-->
		<div class="W-Total">
			<div class="Total-l f-l">
				<i class="fa-check-square-o fa f-l" style=""><span class="Total-l-s">&nbsp;全选</span></i>
				<p class="Total-l-p f-l"><span class="f-l">&nbsp;合计:</span><i class="f-l">¥0</i></p>
				<div class="clear"></div>
			</div>
			<a href="javascript:;" class="Total-r f-r">去结算</a>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	import HuiView from './HuiDing.vue'
	export default {
		components: {
			HuiView,
		},
		mounted() {
			this.Gcar();
		},
		methods: {
			Gcar() {
				var arr = [];
				var ZClass = 0;
//				$('.car-left i').css('line-height', $('.car-ul li').height() + 'px');
				$('.car-left i').on('click', function() {
					if($(this).hasClass('i-active')) {
						$(this).removeClass('i-active');
						ZClass -= parseFloat($(this).parents('.car-left').nextAll('.car-right').find('input').val());
						$('.W-Total .Total-l-p').find('i').text("¥" + ZClass);
						arr.pop();
					} else {
						$(this).addClass('i-active');
						ZClass += parseFloat($(this).parents('.car-left').nextAll('.car-right').find('input').val());
						$('.W-Total .Total-l-p').find('i').text("¥" + ZClass);
						arr.push(1);
					};
					if(arr.length == $('.car-left i').length) {
						$('.Total-l .fa-check-square-o').addClass('i-active');
					} else {
						$('.Total-l .fa-check-square-o').removeClass('i-active');
					}
				});

				$('.Total-l .fa-check-square-o').on('click', function() {
					ZClass = 0;
					if($(this).hasClass('i-active')) {
						$(this).removeClass('i-active');
						$.each($('.car-left i'), function() {
							$(this).removeClass('i-active');
						});
						$('.W-Total .Total-l-p').find('i').text("¥" + ZClass);
					} else {
						$.each($('.car-left i'), function() {
							$(this).addClass('i-active');
							ZClass += parseFloat($(this).parents('.car-left').nextAll('.car-right').find('input').val());
						});
						$(this).addClass('i-active');
						$('.W-Total .Total-l-p').find('i').text("¥" + ZClass);

					}
				});
				var Zong = null;
				$('.car-right').find('.reduce').on('click', function() {
					var reduceNumber = $(this).next('span').text();
					if($(this).next('span').text() == 1) {
						return false;
					} else {
						$(this).next('span').text(--reduceNumber);
					};
					Zong = reduceNumber * parseFloat($(this).parents('.car-right').prevAll('.car-left').find('.car-left-nr span').text().replace(/[^\d.]/g, ''));
					$(this).nextAll('input').val(Zong);
					if($(this).parents('.car-right').prevAll('.car-left').find('.fa-check-square-o').hasClass('i-active')) {
						ZClass -= parseFloat($(this).parents('.car-right').prevAll('.car-left').find('.car-left-nr span').text().replace(/[^\d.]/g, ''));
						$('.W-Total .Total-l-p').find('i').text("¥" + ZClass);
					};
				});

				$('.car-right').find('.plus').on('click', function() {
					var plusNumber = parseInt($(this).prev('span').text());
					$(this).prev('span').text(++plusNumber);
					Zong = plusNumber * parseFloat($(this).parents('.car-right').prevAll('.car-left').find('.car-left-nr span').text().replace(/[^\d.]/g, ''));
					$(this).nextAll('input').val(Zong);
					if($(this).parents('.car-right').prevAll('.car-left').find('.fa-check-square-o').hasClass('i-active')) {
						ZClass += parseFloat($(this).parents('.car-right').prevAll('.car-left').find('.car-left-nr span').text().replace(/[^\d.]/g, ''));
						$('.W-Total .Total-l-p').find('i').text("¥" + ZClass);
					};
				});
			},
		}
	}
</script>

<style scoped="scoped">
	.content {
		top: 0rem;
		bottom: 5rem;
		background: #fff;
	}
</style>
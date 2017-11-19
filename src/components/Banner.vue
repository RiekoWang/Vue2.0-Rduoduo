<template>
	<div class="swiper-container swiper-container1">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="../assets/img/W-banner.jpg" width="100%" /></div>
			<div class="swiper-slide"><img src="../assets/img/W-banner.jpg" width="100%" /></div>
			<div class="swiper-slide"><img src="../assets/img/W-banner.jpg" width="100%" /></div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination swiper-pagination1"></div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.slider();
		},
		methods: {
			slider() {
				var mySwiper = new Swiper('.swiper-container1', {
					autoplay: 2000,
					pagination: '.swiper-pagination1',
					paginationClickable: true,
					preventClicks: false, //当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。
					preventLinksPropagation: true, //阻止click冒泡。拖动Swiper时阻止click事件。
					width: window.innerWidth,
					observer: true //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
				});
				var mySwiper = new Swiper('.swiper-container2', {
					autoplay: 5000,
					slidesPerView: 2,
					spaceBetween: 18,
					paginationClickable: true,
					preventClicks: false, //当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。
					preventLinksPropagation: true, //阻止click冒泡。拖动Swiper时阻止click事件。
					width: window.innerWidth,
					observer: true //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
				})
			}
		}
	}
</script>

<style>

</style>
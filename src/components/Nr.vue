<template>
	<div id="nr">
		<SearchView></SearchView>
		<div class="content">
			<BannerView></BannerView>
			<!--内容start-->
			<HomeView></HomeView>
			<!--内容end-->
			<!--回顶部start-->
			<HuiView></HuiView>
			<!--回顶部end-->
		</div>
	</div>
</template>

<script>
	import '../assets/js/swiper-3.4.1.min.js';
	import SearchView from './Search.vue'
	import BannerView from './Banner.vue'
	import HomeView from './Home.vue'
	import HuiView from './HuiDing.vue'
	export default {
		components:{
			SearchView,
			HomeView,
			HuiView,
			BannerView,
		}
	}
</script>

<style scoped="scoped">
	.content {
		top: 2.2rem;
		bottom: 2.5rem;
	}
</style>
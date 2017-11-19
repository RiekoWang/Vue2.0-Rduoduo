<template>
	<div id="app">
		<div class="page-group">
			<!-- 单个page ,第一个.page默认被展示-->
			<div class="page">
				<!-- 这里是页面内容区 -->
				<router-view></router-view>
				<!-- 工具栏  -->
				<NavView></NavView>
			</div>
			<!-- 其他的单个page内联页（如果有） -->
			<!--<div class="page">...</div>-->
		</div>
	</div>
</template>

<script>
	import NavView from './components/Nav.vue'
	import NrView from './components/Nr.vue'
	export default {
		components: {
			NavView,
			NrView
		},

	}
</script>

<style>
	/*
	@import './assets/css/sm.min.css';
	@import './assets/css/sm-extend.min.css';
	@import './assets/css/common.css';*/
</style>
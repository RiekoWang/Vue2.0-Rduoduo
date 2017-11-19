<template>
	<nav class="bar bar-tab">
		<router-link to='/home' active-class='active' class="tab-item external">
			<span class="fa-home fa"></span>
			<span class="tab-label">首页</span>
		</router-link>
		<router-link to='/activity' active-class='active' class="tab-item external">
			<span class="fa-gift fa"></span>
			<span class="tab-label">活动</span>
		</router-link>
		<router-link to='/Fl' active-class='active' class="tab-item external">
			<span class="fa-th-large fa"></span>
			<span class="tab-label">分类</span>
		</router-link>
		<router-link to='/car' active-class='active' class="tab-item external">
			<span class="fa-shopping-cart fa"></span>
			<span class="tab-label">购物车</span>
		</router-link>
		<router-link to='/PersonalCenter' active-class='active' class="tab-item external">
			<span class="fa-user-circle fa"></span>
			<span class="tab-label">个人中心</span>
		</router-link>
	</nav>
</template>

<script>
</script>

<style>

</style>
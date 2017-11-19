<template>
	<div class="W-search">
		<div class="bar bar-header-secondary">
			<div class="searchbar">
				<a class="searchbar-cancel">取消</a>
				<div class="search-input">
					<label class="icon icon-search" for="search"></label>
					<input type="search" id='search' placeholder='输入关键字...' />
				</div>
			</div>
			<i class="fa fa-map-marker">上海</i>
			<i class="fa fa-bell-o"></i>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
.W-search .searchbar {
	background:transparent;
}

.W-search {
	width: 100%;
	background: #4cab35;
	height: 2.2rem;
	position: relative;
}
.bar-header-secondary {
	width:92%;
	margin: 0 auto;
}

.bar .searchbar {
	padding-right: 1.2rem;
	padding-left: 2.6rem;
}
</style>
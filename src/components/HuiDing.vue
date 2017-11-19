<template>
	<div class="W-hui">
		<i class="fa-angle-up fa"></i>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.Hui();
		},
		methods: {
			Hui() {
				//回顶部
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
			}
		}
	}
</script>

<style>

</style>
<template>
	<div class="header">
		<div class="back"></div>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'v-header'
	}
</script>
<style lang="less" scoped>
	.header {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;

		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #000;
		.back {
			/*position: relative;*/
			width: 40px;
			font-size: 30px;
			&:after {
				position: absolute;
				content: '';
				display: block;
				width: 16px;
				height: 16px;
				border-style: solid;
				border-color: #259bec;
				border-width: 2px 0 0 2px;
				transform: translate(-50%, -50%) rotate(-45deg);
				top: 50%;
				left: 50%;
			}
		}
	}
</style>
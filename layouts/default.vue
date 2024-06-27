<template>
	<div id="app">
		<SideMenu />
		<div class="wrapper">
			<div class="top-nav">{{ props.nav }}</div>
			<slot />
		</div>
	</div>
</template>

<script setup>
import SideMenu from '~/components/layout/SideMenu.vue';

const props = defineProps({
	nav: {
		type: String,
		default: '홈',
	},
});
</script>

<style lang="scss" scoped>
.wrapper {
	padding-left: 300px;
	padding-right: 56px;
	padding-top: 36px;
	min-width: 1400px;
	max-width: 1600px;
}
.top-nav {
	font-size: 14px;
	font-weight: $ft-bold;
	border-bottom: 1px solid #e1e1e1;
	padding-bottom: 12px;
	margin-bottom: 12px;
}
</style>

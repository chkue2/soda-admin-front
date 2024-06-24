<template>
	<div id="app">
		<SideMenu />
		<div class="wrapper">
			<slot />
		</div>
	</div>
</template>

<script setup>
import SideMenu from '~/components/layout/SideMenu.vue';
</script>

<style lang="scss" scoped>
.wrapper {
	padding-left: 300px;
	padding-right: 56px;
	padding-top: 36px;
	min-width: 1400px;
	max-width: 1600px;
}
</style>

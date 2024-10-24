<template>
	<section class="modal-section">
		<div
			class="modal-bg"
			@click="
				() => {
					emit('close-modal');
				}
			"
		></div>
		<div class="modal-container">
			<div class="modal-container-header">
				<p class="modal-title">{{ props.title }}</p>
				<img
					src="/img/icon/close-black.svg"
					@click="
						() => {
							emit('close-modal');
						}
					"
				/>
			</div>
			<div class="modal-container-body">
				<slot />
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['close-modal']);
</script>

<style lang="scss" scoped>
.modal-section {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: $zi-fixed;
}
.modal-bg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1;
}
.modal-container {
	width: auto;
	max-width: 1080px;
	height: auto;
	max-height: 80%;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #ffffff;
	border-radius: 18px;
	overflow-y: auto;
	overflow-x: hidden;
	z-index: 2;
}
.modal-container-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 24px;
	border-radius: 18px 18px 0 0;
	background-color: #ffffff;
	z-index: 1;
	position: sticky;
	top: 0;
	& > img {
		width: 24px;
		height: 24px;
		cursor: pointer;
	}
}
.modal-title {
	font-weight: $ft-bold;
}
</style>

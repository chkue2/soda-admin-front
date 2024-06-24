<template>
	<div class="detail-section">
		<p class="detail-section-title">기본정보</p>
		<div class="detail-section-grid">
			<div class="detail-section-text">답변상태 : 답변완료</div>
			<div></div>
			<div class="detail-section-text">아이디(이름) : chkue2(최한규)</div>
			<div class="detail-section-text">연락처 : 010-4422-9393</div>
			<div class="detail-section-text">문의일시 : 2024-04-11 11:00:00</div>
			<div class="detail-section-text">답변일시 : 2024-04-12 12:00:00</div>
		</div>
	</div>
	<div class="detail-section">
		<p class="detail-section-title mb24">문의내용</p>
		<textarea class="detail-section-text-area" readonly></textarea>
	</div>
	<div class="detail-section">
		<p class="detail-section-title mb24">답변하기</p>
		<textarea class="detail-section-text-area"></textarea>
	</div>
	<div class="buttons-container buttons--right mt36 mb36">
		<button class="button--black">저장</button>
	</div>
</template>

<script setup>
definePageMeta({
	middleware: 'auth',
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/detail/index.scss';
</style>

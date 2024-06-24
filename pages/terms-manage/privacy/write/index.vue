<template>
	<div class="form-title mb12">약관메모</div>
	<div class="form-input mb36">
		<input type="text" />
	</div>
	<p class="form-title mb12">약관 내용</p>
	<div id="summernote" class="mb36"></div>
	<p class="form-title mb12">예정 시행일</p>
	<div class="form-input w200 mb12"><input type="date" /></div>
	<div class="buttons-container">
		<button class="button--white">7일 전 팝업 노출</button>
		<button class="button--white">30일 전 팝업 노출</button>
	</div>
	<div class="buttons-container buttons--right mt36 mb36">
		<button class="button--black" @click="handlerClickSaveButton">저장</button>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';

definePageMeta({
	middleware: 'auth',
});

onMounted(() => {
	$('#summernote').summernote({ height: 300 });
});

const handlerClickSaveButton = () => {
	const markup = $('#summernote').summernote('code');
	console.log(markup);
};
</script>

<template>
	<p class="form-title mb12">공지 유형</p>
	<select class="form-select w150 mb36">
		<option value="">일반</option>
	</select>
	<p class="form-title mb12">공지 공개여부</p>
	<select class="form-select w150 mb12">
		<option value="">공개</option>
	</select>
	<div class="form-grid mb36">
		<div class="form-grid-column">
			<p class="form-title w100">공개 예약 설정</p>
			<div class="form-input">
				<input type="date" />
			</div>
			~
			<div class="form-input"><input type="date" /></div>
		</div>
		<div></div>
		<div class="form-grid-column">
			<p class="form-title w100 flex-unset">Notice여부</p>
			<select class="form-select w150">
				<option value="">공개</option>
			</select>
		</div>
	</div>
	<p class="form-title mt36 mb12">제목</p>
	<div class="form-input mb36">
		<input type="text" />
	</div>
	<p class="form-title mb12">내용</p>
	<div id="summernote"></div>
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

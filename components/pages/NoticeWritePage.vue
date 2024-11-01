<template>
	<p class="form-title mb12">공지 유형</p>
	<select v-model="form.boardType" class="form-select w250 mb36">
		<option value="11">SODA 공지사항</option>
	</select>
	<p class="form-title mb12">공지 공개여부</p>
	<select v-model="form.useFlag" class="form-select w150 mb12">
		<option value="Y">공개</option>
		<option value="N">비공개</option>
		<option value="T">임시저장</option>
	</select>
	<div class="form-grid mb36">
		<div class="form-grid-column">
			<p class="form-title w100 flex-unset">공개 시작일</p>
			<div class="form-input w250">
				<input v-model="form.noticeStartDt" type="datetime-local" />
			</div>
		</div>
		<div></div>
		<div class="form-grid-column">
			<p class="form-title w100 flex-unset">Notice여부</p>
			<select v-model="form.noticePopupFlag" class="form-select w150">
				<option value="Y">Y</option>
				<option value="N">N</option>
			</select>
		</div>
	</div>
	<p class="form-title mt36 mb12">제목</p>
	<div class="form-input mb36">
		<input v-model="form.title" type="text" />
	</div>
	<p class="form-title mb12">내용</p>
	<div id="summernote"></div>
	<div class="buttons-container buttons--right mt36 mb36">
		<button class="button--black" @click="handlerClickSaveButton">저장</button>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { notice } from '~/services/notice.js';

const route = useRoute();
const boardId = route.params.id || 0;

const form = ref({
	parentBoardId: 0,
	boardType: '11',
	contentType: '1101',
	title: '',
	content: '',
	useFlag: 'Y',
	noticeStartDt: '',
	noticePopupFlag: 'Y',
	noticePopupFlag: 'Y',
	adminUserFlag: 'Y',
	boardOrder: 0,
	userId: 'prirosSuperAdmin',
	hits: 0,
	created: '',
	updated: '',
});

const emit = defineEmits(['notice-save']);

onMounted(() => {
	$('#summernote').summernote({ height: 300 });

	if (boardId > 0) {
		notice
			.getDetail(boardId)
			.then(({ data }) => {
				form.value = { ...form.value, ...data };
				$('#summernote').summernote('code', form.value.content);
			})
			.catch(e => {
				alert(e.response.data.message);
			});
	}
});

const handlerClickSaveButton = () => {
	const markup = $('#summernote').summernote('code');
	form.value.content = markup;
	form.value = { ...form.value, boardId };

	emit('notice-save', form.value);
};
</script>

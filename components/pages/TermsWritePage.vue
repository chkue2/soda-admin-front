<template>
	<div class="form-title mb12">약관메모</div>
	<div class="form-input mb36">
		<input v-model="form.memo" type="text" />
	</div>
	<p class="form-title mb12">약관 내용</p>
	<textarea v-model="form.content" class="form-area mb36"></textarea>
	<p class="form-title mb12">시행 예정일</p>
	<div class="form-input w200 mb12">
		<input v-model="form.scheduledDate" type="date" />
	</div>
	<div v-if="false" class="buttons-container">
		<button class="button--white">7일 전 팝업 노출</button>
		<button class="button--white">30일 전 팝업 노출</button>
	</div>
	<div class="buttons-container buttons--right mt36 mb36">
		<button class="button--black" @click="handlerClickSaveButton">
			{{ buttonText }}
		</button>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

import { terms } from '~/services/terms.js';

const props = defineProps({
	seq: {
		type: String,
		default: '0',
	},
	type: {
		type: String,
		default: 'use',
	},
});
const emit = defineEmits(['click-save-button']);

const form = ref({
	memo: '',
	content: '',
	scheduledDate: '',
});

onMounted(() => {
	if (props.seq !== '0') {
		if (props.type === 'use') {
			terms
				.getUseDetail(props.seq)
				.then(({ data }) => {
					form.value.memo = data.memo;
					form.value.content = data.content;
					form.value.scheduledDate = data.scheduledDate;
				})
				.catch(e => {
					alert(e.response.data.message);
				});
		} else {
			terms
				.getPrivacyDetail(props.seq)
				.then(({ data }) => {
					form.value.memo = data.memo;
					form.value.content = data.content;
					form.value.scheduledDate = data.scheduledDate;
				})
				.catch(e => {
					alert(e.response.data.message);
				});
		}
	}
});

const buttonText = computed(() => (props.seq === '0' ? '저장' : '수정'));

const handlerClickSaveButton = () => {
	emit('click-save-button', form.value);
};
</script>

<style lang="scss" scoped>
.form-area {
	width: 100%;
	resize: none;
	height: 800px;
	border: 1px solid #c5c6cc;
	border-radius: 8px;
	padding: 12px;
}
</style>

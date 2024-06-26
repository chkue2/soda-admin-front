<template>
	<select
		v-model="stateValue"
		class="review-state"
		@click="handlerClickReviewState($event)"
		@change="handlerChangeReviewState"
	>
		<option value="Y">공개</option>
		<option value="N">비공개</option>
	</select>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { review } from '~/services/review.js';

const props = defineProps({
	showYn: {
		type: Boolean,
		default: true,
	},
	seq: {
		type: Number,
		default: 0,
	},
});

const stateValue = ref('');

onMounted(() => {
	stateValue.value = props.showYn ? 'Y' : 'N';
});

const handlerClickReviewState = e => {
	e.preventDefault();
	e.stopPropagation();
};

const handlerChangeReviewState = () => {
	console.log(stateValue.value);
	review
		.updateState({ seq: props.seq, showYnStr: stateValue.value })
		.then(({ data }) => {
			alert(data.message);
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};
</script>

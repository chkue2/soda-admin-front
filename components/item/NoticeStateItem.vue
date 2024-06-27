<template>
	<select
		v-model="stateValue"
		class="review-state"
		@click="handlerClickReviewState($event)"
		@change="handlerChangeReviewState"
	>
		<option value="Y">공개</option>
		<option value="N">비공개</option>
		<option value="W">공개대기</option>
		<option value="T">임시저장</option>
	</select>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
	useFlag: {
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
	stateValue.value = props.useFlag;
});

const handlerClickReviewState = e => {
	e.preventDefault();
	e.stopPropagation();
};

const handlerChangeReviewState = () => {
	console.log(1);
	// review
	// 	.updateState({ seq: props.seq, showYnStr: stateValue.value })
	// 	.then(({ data }) => {
	// 		alert(data.message);
	// 	})
	// 	.catch(e => {
	// 		alert(e.response.data.message);
	// 	});
};
</script>

<template>
	<select
		v-model="stateValue"
		class="notice-state"
		@click="handlerClickNoticeState($event)"
		@change="handlerChangeNoticeState"
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
		type: String,
		default: 'Y',
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

const handlerClickNoticeState = e => {
	e.preventDefault();
	e.stopPropagation();
};

const handlerChangeNoticeState = () => {
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

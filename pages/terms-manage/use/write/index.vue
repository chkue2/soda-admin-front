<template>
	<NuxtLayout name="default" nav="이용약관 > 등록">
		<TermsWritePage @click-save-button="handlerClickSaveButton" />
	</NuxtLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';

import TermsWritePage from '~/components/pages/TermsWritePage.vue';

import { terms } from '~/services/terms.js';

definePageMeta({
	layout: false,
	middleware: 'auth',
});

const router = useRouter();

const handlerClickSaveButton = form => {
	terms
		.setUse({
			seq: 0,
			...form,
		})
		.then(() => {
			alert('이용약관이 등록되었습니다.');
			router.go(-1);
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};
</script>

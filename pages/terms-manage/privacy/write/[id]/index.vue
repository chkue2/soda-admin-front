<template>
	<NuxtLayout name="default" nav="개인정보처리방침 > 수정">
		<TermsWritePage
			:seq="route.params.id"
			@click-save-button="handlerClickSaveButton"
		/>
	</NuxtLayout>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

import TermsWritePage from '~/components/pages/TermsWritePage.vue';

import { terms } from '~/services/terms.js';

definePageMeta({
	layout: false,
	middleware: 'auth',
});

const route = useRoute();
const router = useRouter();

const handlerClickSaveButton = form => {
	terms
		.setPrivacy({
			seq: Number(route.params.id),
			...form,
		})
		.then(() => {
			alert('개인정보처리방침이 수정되었습니다.');
			router.go(-1);
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};
</script>

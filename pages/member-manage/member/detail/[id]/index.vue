<template>
	<NuxtLayout name="default" nav="회원관리 > 상세">
		<MemberDetailPage />
	</NuxtLayout>
</template>

<script setup>
import MemberDetailPage from '~/components/pages/MemberDetailPage.vue';

definePageMeta({
	layout: false,
	middleware: 'auth',
});
</script>

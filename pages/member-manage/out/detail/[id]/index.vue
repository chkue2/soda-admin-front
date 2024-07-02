<template>
	<NuxtLayout name="default" nav="탈퇴회원관리 > 상세">
		<MemberDetailPage type="out" />
	</NuxtLayout>
</template>

<script setup>
import MemberDetailPage from '~/components/pages/MemberDetailPage.vue';

definePageMeta({
	layout: false,
	middleware: 'auth',
});
</script>

<template>
	<NuxtLayout name="default" nav="공지사항관리 > 공지사항수정">
		<NoticeWritePage />
	</NuxtLayout>
</template>

<script setup>
import NoticeWritePage from '~/components/pages/NoticeWritePage.vue';

definePageMeta({
	layout: false,
	middleware: 'auth',
});
</script>

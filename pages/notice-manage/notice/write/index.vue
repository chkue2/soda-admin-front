<template>
	<NuxtLayout name="default" nav="공지사항관리 > 공지사항등록">
		<NoticeWritePage @notice-save="noticeSave" />
	</NuxtLayout>
</template>

<script setup>
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';

import NoticeWritePage from '~/components/pages/NoticeWritePage.vue';

import { notice } from '~/services/notice.js';

definePageMeta({
	layout: false,
	middleware: 'auth',
});

const router = useRouter();

const noticeSave = form => {
	const formData = {
		...form,
		noticeStartDt: dayjs(form.noticeStartDt).format('YYYY-MM-DD HH:mm:ss'),
		created: dayjs().format('YYYY-MM-DD HH:mm:ss'),
		updated: dayjs().format('YYYY-MM-DD HH:mm:ss'),
	};

	notice
		.setNotice(formData)
		.then(() => {
			router.go(-1);
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};
</script>

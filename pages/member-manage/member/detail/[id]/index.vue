<template>
	<MemberDetailPage />
</template>

<script setup>
import MemberDetailPage from '~/components/pages/MemberDetailPage.vue';

definePageMeta({
	middleware: 'auth',
});
</script>

<template>
	<MemberDetailPage type="out" />
</template>

<script setup>
import MemberDetailPage from '~/components/pages/MemberDetailPage.vue';

definePageMeta({
	middleware: 'auth',
});
</script>

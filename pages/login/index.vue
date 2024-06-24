<template>
	<NuxtLayout name="login">
		<div class="login-wrapper">
			<div class="login-container">
				<input
					v-model="credentials.userId"
					type="text"
					class="login-input"
					placeholder="아이디"
				/>
				<input
					v-model="credentials.password"
					type="password"
					class="login-input"
					placeholder="비밀번호"
				/>
				<button class="login-button" @click="handlerClickLoginButton">
					로그인
				</button>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth.js';

import {
	LOGIN_REDIRECT_AUTH_KEY,
	LOGIN_REDIRECT_KEY,
} from '~/assets/js/storageKeys.js';

definePageMeta({
	layout: false,
});

const router = useRouter();
const route = useRoute();
const useAuth = useAuthStore();

const credentials = ref({
	userId: 'prirosSuperAdmin',
	password: 'admin34774494!@#$',
});

const isValidation = computed(() => {
	return credentials.value.userId !== '' && credentials.value.password !== '';
});

const handlerClickLoginButton = async () => {
	if (!isValidation.value) {
		if (credentials.value.userId === '') {
			alert('아이디를 입력해주세요.');
		} else if (credentials.value.password === '') {
			alert('비밀번호를 입력해주세요.');
		}
		return false;
	}

	const isSuccess = await useAuth.login(credentials.value);

	if (isSuccess) {
		await useAuth.userProfile();

		setTimeout(() => {
			redirect();
		}, 100);
	} else {
		alert('아이디 또는 비밀번호가 다릅니다.');
	}
};

const redirect = () => {
	const redirectUrl = localStorage.getItem(LOGIN_REDIRECT_KEY);
	const redirectAuth = localStorage.getItem(LOGIN_REDIRECT_AUTH_KEY);

	if (redirectAuth === 'Y') {
		if (route.redirectedFrom.fullPath === undefined) {
			router.replace('/');
		} else {
			router.replace(route.redirectedFrom.fullPath);
		}
	} else {
		router.replace(redirectUrl || '/');
	}
};

onBeforeUnmount(() => {
	localStorage.removeItem(LOGIN_REDIRECT_AUTH_KEY);
});
</script>

<style lang="scss" scoped>
.login-wrapper {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.login-container {
	padding: 24px;
	border: 1px solid #e1e1e1;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	justify-content: center;
	align-items: center;
}
.login-input {
	width: 360px;
	height: 48px;
	border: 1px solid #e1e1e1;
	border-radius: 4px;
	padding: 0 12px;
}
.login-button {
	width: 360px;
	height: 48px;
	background-color: #000000;
	color: #ffffff;
	border-radius: 4px;
}
</style>

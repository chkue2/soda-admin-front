<template>
	<ModalContainer
		title="관리자 정보 수정"
		@close-modal="
			() => {
				emit('close-modal');
			}
		"
	>
		<div class="update-form">
			<div class="update-form-column">
				<p class="form-title mb8">아이디</p>
				<div class="form-input">
					<input v-model="form['userId']" type="text" readonly />
				</div>
			</div>
			<div class="update-form-column">
				<p class="form-title mb8">이름</p>
				<div class="form-input">
					<input v-model="form['userName']" type="text" readonly />
				</div>
			</div>
			<div class="update-form-column">
				<p class="form-title mb8">전화번호</p>
				<div class="form-input">
					<input v-model="form['mobile']" type="tel" />
				</div>
			</div>
			<div class="update-form-column">
				<p class="form-title mb8">비밀번호</p>
				<div class="form-input">
					<input v-model="form['password']" type="password" />
				</div>
			</div>
			<div class="update-form-column">
				<p class="form-title mb8">비밀번호 확인</p>
				<div class="form-input">
					<input v-model="form['confirmedPassword']" type="password" />
				</div>
			</div>
			<div class="update-form-column">
				<p class="form-title mb8">계정 사용 여부</p>
				<select v-model="form['useYn']" class="form-select">
					<option value="Y">사용</option>
					<option value="N">미사용</option>
				</select>
			</div>
			<button class="update-form-button" @click="handlerClickUpdateButton">
				저장
			</button>
		</div>
	</ModalContainer>
</template>

<script setup>
import { onMounted, computed } from 'vue';

import ModalContainer from '~/components/modal/ModalContainer';

import { useAuthStore } from '~/store/auth.js';
import { adminUser } from '~/services/adminUser.js';
import { isValidPassword } from '~/assets/js/utils.js';

const emit = defineEmits(['close-modal']);

const authStore = useAuthStore();

const form = ref({});

onMounted(() => {
	adminUser
		.getAdminUser(authStore.user.profile.userId)
		.then(({ data }) => {
			form.value.userId = data.userId;
			form.value.userName = data.userName;
			form.value.useYn = data.useYn;
			form.value.mobile = data.mobile;
			form.value.defaultMenuId = data.defaultMenuId;
		})
		.catch(e => {
			alert(e.response.data.message);
		});
});

const isValidation = computed(() => {
	return (
		isValidPassword(form.value.password) &&
		form.value.password === form.value.confirmedPassword
	);
});

const handlerClickUpdateButton = () => {
	if (!isValidation.value) {
		if (!isValidPassword(form.value.password)) {
			alert(
				'비밀번호는 영문, 숫자, 특수문자를 조합한 8자리 이상 입력하셔야 합니다.',
			);
		} else if (form.value.password !== form.value.confirmedPassword) {
			alert('비밀번호와 비밀번호 확인이 다릅니다.');
		}
		return false;
	}
	adminUser
		.updateAdminUser(form.value)
		.then(() => {
			alert('관리자 정보가 수정되었습니다.');
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};
</script>

<style lang="scss" scoped>
.update-form {
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 480px;
	padding: 24px;
}
.update-form-button {
	width: 100%;
	height: 56px;
	background-color: #000000;
	border-radius: 16px;
	color: #ffffff;
	font-weight: $ft-bold;
	text-align: center;
}
</style>

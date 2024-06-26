<template>
	<div class="detail-section">
		<p class="detail-section-title">회원 기본정보</p>
		<div class="detail-section-grid">
			<div class="detail-section-text">아이디 : {{ memberDetail.userId }}</div>
			<div class="detail-section-text">
				가입경로 : {{ loginTypeText(memberDetail.loginType) }}
			</div>
			<div class="detail-section-text">이름 : {{ memberDetail.userName }}</div>
			<div class="detail-section-text">
				연락처 : {{ rexFormatPhone(memberDetail.mobile) }}
			</div>
			<div class="detail-section-text">
				가입일시 : {{ changeDateTypeWithTime(memberDetail.created) }}
			</div>
			<div class="detail-section-text">
				최근로그인일시 : {{ changeDateTypeWithTime(memberDetail.updated) }}
			</div>
			<div class="detail-section-box span-2">
				회원상태
				<select v-if="props.type === 'member'" v-model="useFlag" class="w120">
					<option value="Y">일반회원</option>
					<option value="N">중지회원</option>
				</select>
				<p v-if="props.type === 'out'">탈퇴회원</p>
			</div>
		</div>
		<div
			v-if="props.type === 'member' && useFlag === 'N'"
			class="detail-section-box mt18"
		>
			<input type="date" /> ~ <input type="date" />
			<input class="w300" type="text" placeholder="중지 사유를 입력해주세요." />
			<button class="button--save">저장</button>
		</div>
		<div v-if="props.type === 'out'" class="detail-section-box mt18">
			<input class="w500" type="text" placeholder="탈퇴 사유" readonly />
		</div>
	</div>
	<div class="detail-section">
		<p class="detail-section-title">동의여부</p>
		<div class="detail-section-grid">
			광고성 정보 수신동의 :
			{{ memberDetail.advInfoReceiveAgree === 'Y' ? '동의' : '미동의' }} /
			2024-06-19 10:12:00
		</div>
	</div>
	<div class="detail-section">
		<p class="detail-section-title">계약이력</p>
		<div class="list-table mt36 mb36">
			<div class="list-table-header">
				<div class="list-table-item w60">NO</div>
				<div class="list-table-item w100">사건번호</div>
				<div class="list-table-item w200">은행관리번호</div>
				<div class="list-table-item w220">등록일</div>
				<div class="list-table-item w150">잔금일</div>
				<div class="list-table-item w150">등록기관</div>
				<div class="list-table-item w220">소재지</div>
				<div class="list-table-item w150">이전대리인</div>
				<div class="list-table-item w150">설정대리인</div>
				<div class="list-table-item w100">진행상태</div>
			</div>
			<div v-for="i in 10" :key="i" class="list-table-column">
				<div class="list-table-item w60">{{ i }}</div>
				<div class="list-table-item w100">
					<button class="highlight" @click="handlerClickTradeCaseId('24372')">
						24372
					</button>
				</div>
				<div class="list-table-item w200">2024041100065</div>
				<div class="list-table-item w220">2024-04-11 13:55</div>
				<div class="list-table-item w150">2024-05-01</div>
				<div class="list-table-item w150">카카오뱅크</div>
				<div class="list-table-item w220">경기 과천시</div>
				<div class="list-table-item w150">가나다법무사</div>
				<div class="list-table-item w150">다이렉트로합동법무사</div>
				<div class="list-table-item w100">접수</div>
			</div>
		</div>
		<Pagination />
	</div>
</template>

<script setup>
import dayjs from 'dayjs';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import Pagination from '~/components/paging/Pagination.vue';

import { copyClipboard, rexFormatPhone } from '~/assets/js/utils.js';
import { member } from '~/services/member.js';

const props = defineProps({
	type: {
		type: String,
		default: 'member',
	},
});

const route = useRoute();

const memberDetail = ref({});
const useFlag = ref('');

onMounted(() => {
	member
		.getDetail(route.params.id)
		.then(({ data }) => {
			memberDetail.value = data;
			useFlag.value = data.useFlag;
		})
		.catch(e => {
			alert(e.response.data.message);
		});
});

const loginTypeText = type => {
	switch (type) {
		case 'NAVER':
			return '네이버';
		case 'KAKAO':
			return '카카오톡';
		default:
			return '등기소다';
	}
};

const changeDateTypeWithTime = date => {
	return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

const handlerClickTradeCaseId = str => {
	copyClipboard(str);
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/detail/index.scss';
@import '~/assets/scss/list/table.scss';
</style>

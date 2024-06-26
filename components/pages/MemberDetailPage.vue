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
				가입일시 : {{ changeDateFormatWithTime(memberDetail.created) }}
			</div>
			<div class="detail-section-text">
				최근로그인일시 : {{ changeDateFormatWithTime(memberDetail.updated) }}
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
			{{ changeDateFormatWithTime(memberDetail.created) }}
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
			<div
				v-for="(tradeCase, index) in memberDetail.tradeCaseDtoList || []"
				:key="index"
				class="list-table-column"
			>
				<div class="list-table-item w60">{{ index + 1 }}</div>
				<div class="list-table-item w100">
					<button
						class="highlight"
						@click="handlerClickTradeCaseId(tradeCase.tradeCaseId)"
					>
						{{ tradeCase.tradeCaseId }}
					</button>
				</div>
				<div class="list-table-item w200">{{ tradeCase.tradeCaseNo }}</div>
				<div class="list-table-item w220">
					{{ changeDateFormatWithTimeRemoveSeconds(tradeCase.created) }}
				</div>
				<div class="list-table-item w150">
					{{ changeDateFormat(tradeCase.issueDate) }}
				</div>
				<div class="list-table-item w150">
					{{ bankNameText(tradeCase.venderId) }}
				</div>
				<div class="list-table-item w220">
					{{ tradeCase.sido }} {{ tradeCase.gugun }}
				</div>
				<div class="list-table-item w150">가나다법무사</div>
				<div class="list-table-item w150">다이렉트로합동법무사</div>
				<div class="list-table-item w100">
					{{ statusText(tradeCase.state) }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { bankSVG } from '~/assets/js/bankSVG.js';
import {
	changeDateFormat,
	changeDateFormatWithTime,
	changeDateFormatWithTimeRemoveSeconds,
} from '~/assets/js/dateFormat.js';
import { caseStatus } from '~/assets/js/status.js';
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

const bankNameText = venderId => {
	return bankSVG[venderId].title;
};
const statusText = state => {
	return caseStatus[state];
};

const handlerClickTradeCaseId = str => {
	copyClipboard(str);
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/detail/index.scss';
@import '~/assets/scss/list/table.scss';
</style>

<template>
	<NuxtLayout name="default" nav="문의사항관리 > 상세">
		<div class="detail-section">
			<p class="detail-section-title">기본정보</p>
			<div class="detail-section-grid">
				<div class="detail-section-text">
					답변상태 : {{ inquiryDetail.answerYn ? '답변완료' : '접수중' }}
				</div>
				<div></div>
				<div class="detail-section-text">
					아이디(이름) : {{ inquiryDetail.userId }}({{
						inquiryDetail.userName
					}})
				</div>
				<div class="detail-section-text">
					연락처 : {{ rexFormatPhone(inquiryDetail.mobile) }}
				</div>
				<div class="detail-section-text">
					문의일시 : {{ changeDateFormatWithTime(inquiryDetail.created) }}
				</div>
				<div class="detail-section-text">
					답변일시 : {{ changeDateFormatWithTime(inquiryDetail.answered) }}
				</div>
			</div>
		</div>
		<div class="detail-section">
			<p class="detail-section-title mb24">문의내용</p>
			<textarea
				v-model="inquiryDetail.memo"
				class="detail-section-text-area"
				readonly
			></textarea>
		</div>
		<div class="detail-section">
			<p class="detail-section-title mb24">답변하기</p>
			<textarea
				v-model="form.answer"
				class="detail-section-text-area"
			></textarea>
		</div>
		<div class="buttons-container buttons--right mt36 mb36">
			<button class="button--black" @click="handlerClickSaveButton">
				저장
			</button>
		</div>
	</NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { changeDateFormatWithTime } from '~/assets/js/dateFormat.js';
import { rexFormatPhone } from '~/assets/js/utils.js';
import { inquiry } from '~/services/inquiry.js';

definePageMeta({
	layout: false,
	middleware: 'auth',
});

const route = useRoute();
const router = useRouter();

const seq = route.params.id;

const inquiryDetail = ref({});
const form = ref({
	answer: '',
});

onMounted(() => {
	inquiry
		.getDetail(seq)
		.then(({ data }) => {
			inquiryDetail.value = data;
			form.value.answer = data.answer;
		})
		.catch(e => {
			alert(e.response.data.message);
		});
});

const handlerClickSaveButton = () => {
	const formData = {
		...form.value,
		...{
			seq: Number(seq),
			userId: inquiryDetail.value.userId,
			useYn: inquiryDetail.value.useYn ? 'Y' : 'N',
			answerYn: 'Y',
			answerId: 'prirosSuperAdmin',
		},
	};

	inquiry
		.setInquiryAnswer(formData)
		.then(() => {
			alert('답변이 완료되었습니다.');
			router.go(-1);
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/detail/index.scss';
</style>

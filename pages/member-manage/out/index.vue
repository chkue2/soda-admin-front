<template>
	<NuxtLayout name="default" nav="탈퇴회원관리">
		<div class="list-search-container">
			<div class="list-search">
				<div class="list-search-item">
					<p>가입경로</p>
					<select v-model="searchForm.loginType">
						<option value="">전체</option>
						<option value="DEFAULT">등기소다</option>
						<option value="KAKAO">카카오톡</option>
						<option value="NAVER">네이버</option>
					</select>
				</div>
				<div class="list-search-item">
					<p>가입일</p>
					<select v-model="searchForm.searchType">
						<option value="">전체</option>
						<option value="created">가입일</option>
						<option value="updated">최근로그인일</option>
					</select>
					<input v-model="searchForm.fromDate" type="date" />
					~
					<input v-model="searchForm.toDate" type="date" />
				</div>
				<div class="list-search-item">
					<p>검색</p>
					<input
						v-model="searchForm.searchKeyword"
						class="w200"
						type="text"
						placeholder="아이디/이름/연락처/탈퇴사유"
						@keyup.enter="handlerClickSearchButton"
					/>
				</div>
			</div>
			<button class="list-search-button" @click="handlerClickSearchButton">
				조회
			</button>
		</div>
		<div class="list-table mt36 mb36">
			<div class="list-table-header">
				<div class="list-table-item w60">NO</div>
				<div class="list-table-item w100">가입경로</div>
				<div class="list-table-item w100">회원상태</div>
				<div class="list-table-item w200">아이디</div>
				<div class="list-table-item w80">이름</div>
				<div class="list-table-item w150">연락처</div>
				<div class="list-table-item w220">가입일시</div>
				<div class="list-table-item w220">탈퇴일시</div>
				<div class="list-table-item w220">탈퇴사유</div>
			</div>
			<div
				v-for="(m, index) in memberList || []"
				:key="index"
				class="list-table-column"
				@click="handlerClickTableColumn(m.userId)"
			>
				<div class="list-table-item w60">
					{{ Number(paging.startPerPage) - index }}
				</div>
				<div class="list-table-item w100">{{ loginTypeText(m.loginType) }}</div>
				<div class="list-table-item w100">
					{{ m.useFlag === 'Y' ? '일반회원' : '중지회원' }}
				</div>
				<div class="list-table-item w200">{{ m.userId }}</div>
				<div class="list-table-item w80">{{ m.userName }}</div>
				<div class="list-table-item w150">{{ rexFormatPhone(m.mobile) }}</div>
				<div class="list-table-item w220">
					{{ changeDateFormatWithTime(m.created) }}
				</div>
				<div class="list-table-item w220">2024-06-19 09:34:10</div>
				<div class="list-table-item w220">미사용</div>
			</div>
		</div>
		<Pagination :paging="paging" @click-page="hanlderClickPageNumber" />
	</NuxtLayout>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Pagination from '~/components/paging/Pagination.vue';

import { changeDateFormatWithTime } from '~/assets/js/dateFormat.js';
import { getQueryString, rexFormatPhone } from '~/assets/js/utils.js';
import { member } from '~/services/member.js';

definePageMeta({
	layout: false,
	middleware: 'auth',
});

const router = useRouter();
const route = useRoute();

const searchForm = ref({
	loginType: '',
	searchType: '',
	fromDate: '',
	toDate: '',
	searchKeyword: '',
	pageNo: 1,
});

const memberList = ref([]);
const paging = ref({});

watch(route, () => {
	searchForm.value = {
		...{
			loginType: '',
			searchType: '',
			fromDate: '',
			toDate: '',
			searchKeyword: '',
			pageNo: 1,
		},
		...route.query,
	};
	callApi();
});

onMounted(() => {
	searchForm.value = { ...searchForm.value, ...route.query };
	callApi();
});

const callApi = () => {
	member
		.getOutList(searchForm.value)
		.then(({ data }) => {
			memberList.value = data.list;
			paging.value = data.paging;
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};

const handlerClickSearchButton = () => {
	searchForm.value.pageNo = 1;
	router.push(`/member-manage/member${getQueryString(searchForm.value)}`);
};

const hanlderClickPageNumber = pageNo => {
	searchForm.value.pageNo = pageNo;
	router.push(`/member-manage/member${getQueryString(searchForm.value)}`);
};

const handlerClickTableColumn = id => {
	router.push(`/member-manage/out/detail/${id}`);
};

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
</script>

<style lang="scss" scoped>
@import '~/assets/scss/list/search.scss';
@import '~/assets/scss/list/table.scss';
</style>

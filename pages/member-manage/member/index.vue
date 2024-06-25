<template>
	<div class="list-search-container">
		<div class="list-search">
			<div class="list-search-item">
				<p>회원상태</p>
				<select v-model="searchForm.status">
					<option value="">전체</option>
					<option value="일반">일반</option>
					<option value="중지">중지</option>
				</select>
			</div>
			<div class="list-search-item">
				<p>가입경로</p>
				<select v-model="searchForm.joinType">
					<option value="">전체</option>
					<option value="등기소다">등기소다</option>
					<option value="카카오톡">카카오톡</option>
					<option value="네이버">네이버</option>
				</select>
			</div>
			<div class="list-search-item">
				<select v-model="searchForm.dateType">
					<option value="">전체</option>
					<option value="가입일">가입일</option>
					<option value="최근로그인일">최근로그인일</option>
				</select>
				<input v-model="searchForm.sDate" type="date" />
				~
				<input v-model="searchForm.eDate" type="date" />
			</div>
			<div class="list-search-item">
				<p>광고정보수신</p>
				<select v-model="searchForm.adYn">
					<option value="">전체</option>
					<option value="Y">동의</option>
					<option value="N">미동의</option>
				</select>
			</div>
			<div class="list-search-item">
				<p>검색</p>
				<input
					v-model="searchForm.keyword"
					class="w200"
					type="text"
					placeholder="아이디/이름/연락처"
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
			<div class="list-table-item w150">광고수신동의</div>
			<div class="list-table-item w220">가입일시</div>
			<div class="list-table-item w220">최근로그인일시</div>
			<div class="list-table-item w60"></div>
		</div>
		<div
			v-for="i in 10"
			:key="i"
			class="list-table-column"
			@click="handlerClickTableColumn(i)"
		>
			<div class="list-table-item w60">{{ i }}</div>
			<div class="list-table-item w100">카카오톡</div>
			<div class="list-table-item w100">일반회원</div>
			<div class="list-table-item w200">chkue2</div>
			<div class="list-table-item w80">최한규</div>
			<div class="list-table-item w150">010-4422-9393</div>
			<div class="list-table-item w150">동의</div>
			<div class="list-table-item w220">2024-06-19 09:33:33</div>
			<div class="list-table-item w220">2024-06-19 09:34:10</div>
			<div class="list-table-item w60"></div>
		</div>
	</div>
	<Pagination />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Pagination from '~/components/paging/Pagination.vue';

import { getQueryString } from '~/assets/js/utils.js';

definePageMeta({
	middleware: 'auth',
});

const router = useRouter();
const route = useRoute();

const searchForm = ref({
	status: '',
	joinType: '',
	dateType: '',
	sDate: '',
	eDate: '',
	adYn: '',
	keyword: '',
	pageNo: 1,
});

watch(route, () => {
	console.log(route.query);
});

onMounted(() => {
	searchForm.value = { ...searchForm.value, ...route.query };
});

const handlerClickSearchButton = () => {
	searchForm.value.pageNo = 1;
	router.push(`/member-manage/member${getQueryString(searchForm.value)}`);
};

const handlerClickTableColumn = id => {
	router.push(`/member-manage/member/detail/${id}`);
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/list/search.scss';
@import '~/assets/scss/list/table.scss';
</style>

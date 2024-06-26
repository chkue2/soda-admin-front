<template>
	<div class="list-search-container">
		<div class="list-search">
			<div class="list-search-item">
				<p>유형</p>
				<select>
					<option value="">전체</option>
				</select>
			</div>
			<div class="list-search-item">
				<p>답변상태</p>
				<select v-model="searchForm.answerYn">
					<option value="">전체</option>
					<option value="N">접수중</option>
					<option value="Y">답변완료</option>
				</select>
			</div>
			<div class="list-search-item">
				<p>문의일자</p>
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
					placeholder="아이디/이름/내용/연락처"
					@keyup.enter="handlerClickSearchButton"
				/>
			</div>
		</div>
		<button class="list-search-button" @click="handlerClickSearchButton">
			조회
		</button>
	</div>
	<div class="list-table mt18 mb36">
		<div class="list-table-header">
			<div class="list-table-item w60">NO</div>
			<div class="list-table-item w100">유형</div>
			<div class="list-table-item w250">제목</div>
			<div class="list-table-item w180">아이디(이름)</div>
			<div class="list-table-item w150">연락처</div>
			<div class="list-table-item w180">등록일시</div>
			<div class="list-table-item w180">답변일</div>
			<div class="list-table-item w100">답변상태</div>
		</div>
		<div
			v-for="(i, index) in inquiryList"
			:key="index"
			class="list-table-column"
			@click="handlerClickTableColumn(i.seq)"
		>
			<div class="list-table-item w60">{{ paging.startPerPage - index }}</div>
			<div class="list-table-item w100">기본</div>
			<div class="list-table-item w250">
				<p class="inquiry-content ellipsis">
					{{ i.title }}
				</p>
			</div>
			<div class="list-table-item w180">{{ i.userId }}({{ i.userName }})</div>
			<div class="list-table-item w150">{{ rexFormatPhone(i.mobile) }}</div>
			<div class="list-table-item w180">
				{{ changeDateFormatWithTimeRemoveSeconds(i.created) }}
			</div>
			<div class="list-table-item w180">
				{{ changeDateFormatWithTimeRemoveSeconds(i.answered) }}
			</div>
			<div class="list-table-item w100">
				{{ i.answerYn ? '답변완료' : '접수중' }}
			</div>
		</div>
	</div>
	<Pagination :paging="paging" @click-page="hanlderClickPageNumber" />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Pagination from '~/components/paging/Pagination.vue';

import { changeDateFormatWithTimeRemoveSeconds } from '~/assets/js/dateFormat.js';
import { getQueryString, rexFormatPhone } from '~/assets/js/utils.js';
import { inquiry } from '~/services/inquiry.js';

definePageMeta({
	middleware: 'auth',
});

const router = useRouter();
const route = useRoute();

const searchForm = ref({
	useFlag: '',
	answerYn: '',
	searchType: '',
	fromDate: '',
	toDate: '',
	searchKeyword: '',
	pageNo: 1,
});

const inquiryList = ref([]);
const paging = ref({});

watch(route, () => {
	console.log(route.query);
	searchForm.value = {
		...{
			useFlag: '',
			answerYn: '',
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
	inquiry
		.getList(searchForm.value)
		.then(({ data }) => {
			console.log(data);
			inquiryList.value = data.list;
			paging.value = data.paging;
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};

const handlerClickSearchButton = () => {
	searchForm.value.pageNo = 1;
	router.push(`/help-center/inquiry${getQueryString(searchForm.value)}`);
};

const hanlderClickPageNumber = pageNo => {
	searchForm.value.pageNo = pageNo;
	router.push(`/help-center/inquiry${getQueryString(searchForm.value)}`);
};

const handlerClickTableColumn = id => {
	router.push(`/help-center/inquiry/detail/${id}`);
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/list/search.scss';
@import '~/assets/scss/list/table.scss';
.inquiry-content {
	max-width: 240px;
}
</style>

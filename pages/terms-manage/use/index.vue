<template>
	<NuxtLayout name="default" nav="이용약관">
		<div class="list-search-container">
			<div class="list-search">
				<div class="list-search-item">
					<p>등록일</p>
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
						placeholder="메모"
						@keyup.enter="handlerClickSearchButton"
					/>
				</div>
			</div>
			<button class="list-search-button" @click="handlerClickSearchButton">
				조회
			</button>
		</div>
		<div class="buttons-container buttons--right mt36 mb18">
			<NuxtLink class="button--black" to="/terms-manage/use/write"
				>등록</NuxtLink
			>
		</div>
		<div class="list-table mt18 mb36">
			<div class="list-table-header">
				<div class="list-table-item w60">NO</div>
				<div class="list-table-item w500">약관메모</div>
				<div class="list-table-item w200">상태</div>
				<div class="list-table-item w250">시행예정일</div>
				<div class="list-table-item w250">등록일</div>
			</div>
			<div
				v-for="(t, index) in termsList"
				:key="index"
				class="list-table-column"
				@click="handlerClickTableColumn(t.seq)"
			>
				<div class="list-table-item w60">{{ paging.startPerPage - index }}</div>
				<div class="list-table-item w500">
					<p class="use-content ellipsis">
						{{ t.memo }}
					</p>
				</div>
				<div class="list-table-item w200">{{ t.state }}</div>
				<div class="list-table-item w250">
					{{ changeDateFormat(t.scheduledDate) }}
				</div>
				<div class="list-table-item w250">
					{{ changeDateFormat(t.created) }}
				</div>
			</div>
		</div>
		<Pagination :paging="paging" @click-page="hanlderClickPageNumber" />
	</NuxtLayout>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Pagination from '~/components/paging/Pagination.vue';

import { changeDateFormat } from '~/assets/js/dateFormat.js';
import { getQueryString } from '~/assets/js/utils.js';
import { terms } from '~/services/terms.js';

definePageMeta({
	layout: false,
	middleware: 'auth',
});

const router = useRouter();
const route = useRoute();

const searchForm = ref({
	fromDate: '',
	toDate: '',
	searchKeyword: '',
	pageNo: 1,
});

const termsList = ref([]);
const paging = ref({});

watch(route, () => {
	searchForm.value = {
		...{
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
	terms
		.getUseList(searchForm.value)
		.then(({ data }) => {
			termsList.value = data.list;
			paging.value = data.paging;
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};

const handlerClickSearchButton = () => {
	searchForm.value.pageNo = 1;
	router.push(`/terms-manage/use${getQueryString(searchForm.value)}`);
};

const hanlderClickPageNumber = pageNo => {
	searchForm.value.pageNo = pageNo;
	router.push(`/terms-manage/use${getQueryString(searchForm.value)}`);
};

const handlerClickTableColumn = seq => {
	router.push(`/terms-manage/use/write/${seq}`);
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/list/search.scss';
@import '~/assets/scss/list/table.scss';
.use-content {
	max-width: 450px;
}
</style>

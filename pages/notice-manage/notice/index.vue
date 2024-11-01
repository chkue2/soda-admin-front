<template>
	<NuxtLayout name="default" nav="공지사항관리">
		<div class="list-search-container">
			<div class="list-search">
				<div class="list-search-item">
					<p>유형</p>
					<select>
						<option value="">전체</option>
					</select>
				</div>
				<div class="list-search-item">
					<p>공개여부</p>
					<select v-model="searchForm.useFlag">
						<option value="">전체</option>
						<option value="Y">공개</option>
						<option value="N">비공개</option>
						<option value="T">임시저장</option>
					</select>
				</div>
				<div class="list-search-item">
					<p>Notice여부</p>
					<select v-model="searchForm.helpCenter">
						<option value="">전체</option>
						<option value="Y">Y</option>
						<option value="N">N</option>
					</select>
				</div>
				<div class="list-search-item">
					<p>날짜 검색</p>
					<select v-model="searchForm.noticeDateType">
						<option value="">전체</option>
						<option value="created">등록일</option>
						<option value="startDt">공지시작일</option>
					</select>
					<input v-model="searchForm.noticeStartDt" type="date" />
				</div>
				<div class="list-search-item">
					<p>검색</p>
					<input
						v-model="searchForm.searchKeyword"
						class="w200"
						type="text"
						placeholder="제목/등록자"
						@keyup.enter="handlerClickSearchButton"
					/>
				</div>
			</div>
			<button class="list-search-button" @click="handlerClickSearchButton">
				조회
			</button>
		</div>
		<div class="buttons-container buttons--right mt36 mb18">
			<NuxtLink class="button--black" to="/notice-manage/notice/write"
				>등록</NuxtLink
			>
		</div>
		<div class="list-table mt18 mb36">
			<div class="list-table-header">
				<div class="list-table-item w60">NO</div>
				<div class="list-table-item w100">유형</div>
				<div class="list-table-item w250">제목</div>
				<div class="list-table-item w150">공지시작일</div>
				<div class="list-table-item w100">공개여부</div>
				<div class="list-table-item w100">Notice여부</div>
				<div class="list-table-item w200">등록자</div>
				<div class="list-table-item w150">등록일시</div>
			</div>
			<div
				v-for="(n, index) in noticeList || []"
				:key="index"
				class="list-table-column"
				@click="handlerClickTableColumn(n.boardId)"
			>
				<div class="list-table-item w60">{{ paging.startPerPage - index }}</div>
				<div class="list-table-item w100">기본</div>
				<div class="list-table-item w250">
					<p class="notice-content ellipsis">
						{{ n.title }}
					</p>
				</div>
				<div class="list-table-item w150">
					{{ changeDateFormat(n.noticeStartDt) }}
				</div>
				<div class="list-table-item w100">
					<NoticeStateItem :board-id="n.boardId" :use-flag="n.useFlag" />
				</div>
				<div class="list-table-item w100">{{ n.helpCenter }}</div>
				<div class="list-table-item w200">{{ n.userId }}</div>
				<div class="list-table-item w150">
					{{ changeDateFormatWithTime(n.created) }}
				</div>
			</div>
		</div>
		<Pagination :paging="paging" @click-page="hanlderClickPageNumber" />
	</NuxtLayout>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import NoticeStateItem from '~/components/item/NoticeStateItem.vue';
import Pagination from '~/components/paging/Pagination.vue';

import {
	changeDateFormat,
	changeDateFormatWithTime,
} from '~/assets/js/dateFormat.js';
import { getQueryString } from '~/assets/js/utils.js';
import { notice } from '~/services/notice.js';

definePageMeta({
	layout: false,
	middleware: 'auth',
});

const router = useRouter();
const route = useRoute();

const searchForm = ref({
	useFlag: '',
	helpCenter: '',
	noticeStartDt: '',
	noticeDateType: '',
	searchKeyword: '',
	pageNo: 1,
});

const noticeList = ref([]);
const paging = ref({});

watch(route, () => {
	searchForm.value = {
		...{
			useFlag: '',
			helpCenter: '',
			noticeStartDt: '',
			noticeDateType: '',
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
	notice
		.getList(searchForm.value)
		.then(({ data }) => {
			noticeList.value = data.list;
			paging.value = data.paging;
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};

const handlerClickSearchButton = () => {
	searchForm.value.pageNo = 1;
	router.push(`/notice-manage/notice${getQueryString(searchForm.value)}`);
};

const hanlderClickPageNumber = pageNo => {
	searchForm.value.pageNo = pageNo;
	router.push(`/notice-manage/notice${getQueryString(searchForm.value)}`);
};

const handlerClickTableColumn = boardId => {
	router.push(`/notice-manage/notice/write/${boardId}`);
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/list/search.scss';
@import '~/assets/scss/list/table.scss';
.notice-content {
	max-width: 240px;
}
.notice-state {
	min-width: 88px;
	height: 36px;
	border-radius: 8px;
	border: 1px solid #e1e1e1;
	padding: 0 12px;
	font-size: 14px;
}
</style>

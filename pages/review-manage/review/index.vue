<template>
	<NuxtLayout name="default" nav="리뷰관리">
		<div class="list-search-container">
			<div class="list-search">
				<div class="list-search-item">
					<p>작성일</p>
					<input v-model="searchForm.fromDate" type="date" />
					~
					<input v-model="searchForm.toDate" type="date" />
				</div>
				<div class="list-search-item">
					<p>상태</p>
					<select v-model="searchForm.showYnStr">
						<option value="">전체</option>
						<option value="Y">공개</option>
						<option value="N">비공개</option>
					</select>
					<select v-model="searchForm.useYnStr">
						<option value="">전체</option>
						<option value="Y">정상</option>
						<option value="N">삭제</option>
					</select>
				</div>
				<div class="list-search-item">
					<p>검색</p>
					<select v-model="searchForm.searchType">
						<option value="">전체</option>
						<option value="userId">작성자</option>
						<option value="tradeCaseId">사건번호</option>
						<option value="firmName">사무소명</option>
						<option value="memo">작성 내용</option>
					</select>
					<input
						v-model="searchForm.searchKeyword"
						class="w200"
						type="text"
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
				<div class="list-table-item w220">작성일시</div>
				<div class="list-table-item w150">작성자</div>
				<div class="list-table-item w100">사건번호</div>
				<div class="list-table-item w200">사무소명</div>
				<div class="list-table-item w100">평균 평점</div>
				<div class="list-table-item w100">시간준수</div>
				<div class="list-table-item w100">친절만족</div>
				<div class="list-table-item w100">업무수행</div>
				<div class="list-table-item w300">작성 내용</div>
				<div class="list-table-item w150">상태</div>
				<div class="list-table-item w100">상태</div>
			</div>
			<div
				v-for="(r, index) in reviewList || []"
				:key="index"
				class="list-table-column"
				@click="handlerClickTableColumn(r.seq)"
			>
				<div class="list-table-item w60">{{ paging.startPerPage - index }}</div>
				<div class="list-table-item w220">
					{{ changeDateFormatWithTimeRemoveSeconds(r.created) }}
				</div>
				<div class="list-table-item w150">{{ r.userName }}</div>
				<div class="list-table-item w100">
					<button
						class="highlight"
						@click="handlerClickHighlight($event, r.tradeCaseId)"
					>
						{{ r.tradeCaseId }}
					</button>
				</div>
				<div class="list-table-item w200">
					<button
						class="highlight"
						@click="handlerClickHighlight($event, r.firmName)"
					>
						{{ r.firmName }}
					</button>
				</div>
				<div class="list-table-item w100">{{ r.averageCriteria }}</div>
				<div class="list-table-item w100">{{ r.timeCriteria }}</div>
				<div class="list-table-item w100">{{ r.kindCriteria }}</div>
				<div class="list-table-item w100">{{ r.rapidCriteria }}</div>
				<div
					class="list-table-item w300 review-content-parent"
					@mouseover="handlerMouseoverReviewContent"
					@mouseleave="handlerMouseleaveReviewContent"
				>
					<p class="review-content ellipsis">
						{{ r.memo }}
					</p>
					<div
						class="review-content-detail"
						v-html="r.memo?.replaceAll('\n', '<br>')"
						@click="handlerClickDisableEvent"
					></div>
				</div>
				<div class="list-table-item w150">
					<ReviewStateItem :show-yn="r.showYn" :seq="r.seq" />
				</div>
				<div class="list-table-item w100">{{ r.useYn ? '정상' : '삭제' }}</div>
			</div>
		</div>
		<Pagination :paging="paging" @click-page="hanlderClickPageNumber" />
	</NuxtLayout>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import ReviewStateItem from '~/components/item/ReviewStateItem.vue';
import Pagination from '~/components/paging/Pagination.vue';

import { changeDateFormatWithTimeRemoveSeconds } from '~/assets/js/dateFormat.js';
import { copyClipboard, getQueryString } from '~/assets/js/utils.js';
import { review } from '~/services/review.js';

definePageMeta({
	layout: false,
	middleware: 'auth',
});

const router = useRouter();
const route = useRoute();

const searchForm = ref({
	useYnStr: '',
	showYnStr: '',
	fromDate: '',
	toDate: '',
	searchType: '',
	searchKeyword: '',
	pageNo: 1,
});

const reviewList = ref([]);
const paging = ref({});

watch(route, () => {
	searchForm.value = {
		...{
			useYnStr: '',
			showYnStr: '',
			fromDate: '',
			toDate: '',
			searchType: '',
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
	review
		.getList(searchForm.value)
		.then(({ data }) => {
			reviewList.value = data.list;
			paging.value = data.paging;
		})
		.catch(e => {
			alert(e.response.data.message);
		});
};

const handlerClickSearchButton = () => {
	searchForm.value.pageNo = 1;
	router.push(`/review-manage/review${getQueryString(searchForm.value)}`);
};

const hanlderClickPageNumber = pageNo => {
	searchForm.value.pageNo = pageNo;
	router.push(`/review-manage/review${getQueryString(searchForm.value)}`);
};

const handlerClickTableColumn = id => {
	console.log(id);
};

const handlerClickHighlight = (e, str) => {
	e.preventDefault();
	e.stopPropagation();

	copyClipboard(str);
};

const handlerMouseoverReviewContent = e => {
	e.target.classList.add('open');
};
const handlerMouseleaveReviewContent = e => {
	e.target.classList.remove('open');
};

const handlerClickDisableEvent = e => {
	e.preventDefault();
	e.stopPropagation();
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/list/search.scss';
@import '~/assets/scss/list/table.scss';
.review-content {
	max-width: 200px;
}
.review-state {
	min-width: 88px;
	height: 36px;
	border-radius: 8px;
	border: 1px solid #e1e1e1;
	padding: 0 12px;
	font-size: 14px;
}
.review-content-parent {
	&.open {
		.review-content-detail {
			visibility: visible;
			opacity: 1;
		}
	}
}
.review-content-detail {
	position: absolute;
	top: 0;
	left: 5px;
	font-size: 13px;
	background-color: #ffffff;
	padding: 8px;
	border-radius: 8px;
	box-shadow: 1px 1px 13px #545454;
	visibility: hidden;
	opacity: 0;
	transition: all 0.15s linear;
}
</style>

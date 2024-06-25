<template>
	<div class="list-search-container">
		<div class="list-search">
			<div class="list-search-item">
				<p>작성일</p>
				<select>
					<option value="">전체</option>
				</select>
				<input type="date" />
				~
				<input type="date" />
			</div>
			<div class="list-search-item">
				<p>상태</p>
				<select>
					<option value="">전체</option>
				</select>
			</div>
			<div class="list-search-item">
				<p>검색</p>
				<select>
					<option value="">전체</option>
				</select>
				<input class="w200" type="text" />
			</div>
		</div>
		<button class="list-search-button">조회</button>
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
		</div>
		<div
			v-for="i in 10"
			:key="i"
			class="list-table-column"
			@click="handlerClickTableColumn(i)"
		>
			<div class="list-table-item w60">{{ i }}</div>
			<div class="list-table-item w220">2024-06-19 10:40</div>
			<div class="list-table-item w150">최*규</div>
			<div class="list-table-item w100">
				<button
					class="highlight"
					@click="handlerClickHighlight($event, '12345')"
				>
					12345
				</button>
			</div>
			<div class="list-table-item w200">
				<button
					class="highlight"
					@click="handlerClickHighlight($event, '홍길동 법무사 사무소')"
				>
					홍길동 법무사 사무소
				</button>
			</div>
			<div class="list-table-item w100">4.3</div>
			<div class="list-table-item w100">4</div>
			<div class="list-table-item w100">4</div>
			<div class="list-table-item w100">5</div>
			<div class="list-table-item w300">
				<p class="review-content ellipsis">
					친절하게 처리해 주셔서 감사합니다.
				</p>
			</div>
			<div class="list-table-item w150">
				<select class="review-state" @click="handlerClickReviewState($event)">
					<option value="">공개</option>
				</select>
			</div>
		</div>
	</div>
	<Pagination />
</template>

<script setup>
import Pagination from '~/components/paging/Pagination.vue';

import { copyClipboard } from '~/assets/js/utils.js';

definePageMeta({
	middleware: 'auth',
});

const handlerClickTableColumn = id => {
	console.log(id);
};

const handlerClickHighlight = (e, str) => {
	e.preventDefault();
	e.stopPropagation();

	copyClipboard(str);
};

const handlerClickReviewState = e => {
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
</style>

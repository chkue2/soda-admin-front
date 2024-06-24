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
				<p>공개여부</p>
				<select>
					<option value="">전체</option>
				</select>
			</div>
			<div class="list-search-item">
				<p>팝업여부</p>
				<select>
					<option value="">전체</option>
				</select>
			</div>
			<div class="list-search-item">
				<p>공지기간</p>
				<input type="date" />
				~
				<input type="date" />
			</div>
			<div class="list-search-item">
				<p>검색</p>
				<input class="w200" type="text" placeholder="제목/등록자" />
			</div>
		</div>
		<button class="list-search-button">조회</button>
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
			<div class="list-table-item w250">공지기간</div>
			<div class="list-table-item w100">공개여부</div>
			<div class="list-table-item w100">팝업여부</div>
			<div class="list-table-item w100">Notice여부</div>
			<div class="list-table-item w120">등록자</div>
			<div class="list-table-item w150">등록일시</div>
			<div class="list-table-item w80"></div>
		</div>
		<div
			v-for="i in 10"
			:key="i"
			class="list-table-column"
			@click="handlerClickTableColumn(i)"
		>
			<div class="list-table-item w60">{{ i }}</div>
			<div class="list-table-item w100">유형1</div>
			<div class="list-table-item w250">
				<p class="notice-content ellipsis">
					20자까지 노출하고 필요시 말줄임표로 보여준다.
				</p>
			</div>
			<div class="list-table-item w250">2024-01-01 ~ 2024-02-01</div>
			<div class="list-table-item w100">공개대기</div>
			<div class="list-table-item w100">Y</div>
			<div class="list-table-item w100">Y</div>
			<div class="list-table-item w120">관리자</div>
			<div class="list-table-item w150">2024-01-01 10:00:00</div>
			<div class="list-table-item w80">
				<img class="button--trash" src="/img/icon/close-black.svg" />
			</div>
		</div>
	</div>
	<Pagination />
</template>

<script setup>
import Pagination from '~/components/paging/Pagination.vue';

definePageMeta({
	middleware: 'auth',
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/list/search.scss';
@import '~/assets/scss/list/table.scss';
.notice-content {
	max-width: 240px;
}
</style>

<template>
	<div class="list-search-container">
		<div class="list-search">
			<div class="list-search-item">
				<p>배너 유형</p>
				<select>
					<option value="">전체</option>
				</select>
			</div>
			<div class="list-search-item">
				<p>노출기간</p>
				<input type="date" />
				~
				<input type="date" />
			</div>
			<div class="list-search-item">
				<p>검색</p>
				<input class="w200" type="text" placeholder="제목" />
			</div>
		</div>
		<button class="list-search-button">조회</button>
	</div>
	<div class="buttons-container buttons--right mt36 mb18">
		<NuxtLink class="button--black" to="/banner-manage/banner/write"
			>등록</NuxtLink
		>
	</div>
	<div class="list-table mt18 mb36">
		<div class="list-table-header">
			<div class="list-table-item w60">NO</div>
			<div class="list-table-item w220">배너 유형</div>
			<div class="list-table-item w250">제목</div>
			<div class="list-table-item w150">파일형태</div>
			<div class="list-table-item w300">노출기간</div>
			<div class="list-table-item w100">연결 URL</div>
			<div class="list-table-item w100">삭제</div>
		</div>
		<div
			v-for="i in 10"
			:key="i"
			class="list-table-column"
			@click="handlerClickTableColumn(i)"
		>
			<div class="list-table-item w60">{{ i }}</div>
			<div class="list-table-item w220">메인 배너</div>
			<div class="list-table-item w250">
				<p class="banner-content ellipsis">
					20자까지 노출 후 말줄임표 표시합니다. 계속 줄어들어요
				</p>
			</div>
			<div class="list-table-item w150">이미지</div>
			<div class="list-table-item w300">2024-06-01 ~ 2024-06-30</div>
			<div class="list-table-item w100">Y</div>
			<div class="list-table-item w100">
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
.banner-content {
	max-width: 240px;
}
</style>

<template>
	<div class="list-search-container">
		<div class="list-search">
			<div class="list-search-item">
				<p>등록일</p>
				<input type="date" />
				~
				<input type="date" />
			</div>
			<div class="list-search-item">
				<p>검색</p>
				<input class="w200" type="text" placeholder="메모" />
			</div>
		</div>
		<button class="list-search-button">조회</button>
	</div>
	<div class="buttons-container buttons--right mt36 mb18">
		<NuxtLink class="button--black" to="/terms-manage/privacy/write"
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
			v-for="i in 10"
			:key="i"
			class="list-table-column"
			@click="handlerClickTableColumn(i)"
		>
			<div class="list-table-item w60">{{ i }}</div>
			<div class="list-table-item w500">
				<p class="use-content ellipsis">
					20자까지 노출하고 필요시 말줄임표로 보여준다.
				</p>
			</div>
			<div class="list-table-item w200">대기</div>
			<div class="list-table-item w250">2024-01-01</div>
			<div class="list-table-item w250">2024-01-01</div>
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
.use-content {
	max-width: 450px;
}
</style>

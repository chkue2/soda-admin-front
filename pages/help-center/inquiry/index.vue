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
				<select>
					<option value="">전체</option>
				</select>
			</div>
			<div class="list-search-item">
				<p>문의일자</p>
				<input type="date" />
				~
				<input type="date" />
			</div>
			<div class="list-search-item">
				<p>검색</p>
				<input class="w200" type="text" placeholder="아이디/이름/내용/연락처" />
			</div>
		</div>
		<button class="list-search-button">조회</button>
	</div>
	<div class="list-table mt18 mb36">
		<div class="list-table-header">
			<div class="list-table-item w60">NO</div>
			<div class="list-table-item w100">유형</div>
			<div class="list-table-item w250">내용</div>
			<div class="list-table-item w180">아이디(이름)</div>
			<div class="list-table-item w150">연락처</div>
			<div class="list-table-item w180">등록일시</div>
			<div class="list-table-item w180">답변일</div>
			<div class="list-table-item w100">답변상태</div>
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
				<p class="inquiry-content ellipsis">
					20자까지 노출하고 필요시 말줄임표로 보여준다.
				</p>
			</div>
			<div class="list-table-item w180">chkue2(최한규)</div>
			<div class="list-table-item w150">010-4422-9393</div>
			<div class="list-table-item w180">2024-04-11 11:00</div>
			<div class="list-table-item w180">2024-04-12 12:00</div>
			<div class="list-table-item w100">답변완료</div>
		</div>
	</div>
	<Pagination />
</template>

<script setup>
import { useRouter } from 'vue-router';

import Pagination from '~/components/paging/Pagination.vue';

definePageMeta({
	middleware: 'auth',
});

const router = useRouter();
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

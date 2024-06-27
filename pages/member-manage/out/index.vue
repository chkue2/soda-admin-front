<template>
	<NuxtLayout name="default" nav="탈퇴회원관리">
		<div class="list-search-container">
			<div class="list-search">
				<div class="list-search-item">
					<p>가입경로</p>
					<select>
						<option value="">전체</option>
					</select>
				</div>
				<div class="list-search-item">
					<p>가입일</p>
					<select>
						<option value="">전체</option>
					</select>
					<input type="date" />
					~
					<input type="date" />
				</div>
				<div class="list-search-item">
					<p>검색</p>
					<input
						class="w200"
						type="text"
						placeholder="아이디/이름/연락처/탈퇴사유"
					/>
				</div>
			</div>
			<button class="list-search-button">조회</button>
		</div>
		<div class="list-table mt36 mb36">
			<div class="list-table-header">
				<div class="list-table-item w60">NO</div>
				<div class="list-table-item w100">가입경로</div>
				<div class="list-table-item w100">회원상태</div>
				<div class="list-table-item w200">아이디</div>
				<div class="list-table-item w80">이름</div>
				<div class="list-table-item w150">연락처</div>
				<div class="list-table-item w220">가입일시</div>
				<div class="list-table-item w220">탈퇴일시</div>
				<div class="list-table-item w220">탈퇴사유</div>
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
				<div class="list-table-item w220">2024-06-19 09:33:33</div>
				<div class="list-table-item w220">2024-06-19 09:34:10</div>
				<div class="list-table-item w220">미사용</div>
				<div class="list-table-item w60"></div>
			</div>
		</div>
		<Pagination />
	</NuxtLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';

import Pagination from '~/components/paging/Pagination.vue';

definePageMeta({
	layout: false,
	middleware: 'auth',
});

const router = useRouter();

const handlerClickTableColumn = id => {
	router.push(`/member-manage/out/detail/${id}`);
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/list/search.scss';
@import '~/assets/scss/list/table.scss';
</style>

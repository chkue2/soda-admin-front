<template>
	<p class="form-title mb12">배너 유형</p>
	<select class="form-select w150 mb36">
		<option value="">메인 배너</option>
	</select>
	<p class="form-title mb12">제목</p>
	<div class="form-input mb36">
		<input type="text" />
	</div>
	<div class="form-grid mb36">
		<div class="form-grid-column">
			<p class="form-title w70 flex-unset">파일형태</p>
			<button class="button--black">이미지</button>
			<button class="button--white">영상</button>
		</div>
	</div>
	<p class="form-title mb12">이미지 업로드</p>
	<div class="form-grid mb36">
		<div class="form-grid-column">
			<p class="form-title w80">PC 이미지</p>
			<div class="form-input input--file">
				<p>파일 선택</p>
				<input type="file" accept=".png, .jpg, .jpeg, .gif" />
			</div>
		</div>
		<div class="form-grid-column">
			<p class="form-title w80">MO 이미지</p>
			<div class="form-input input--file">
				<p>파일 선택</p>
				<input type="file" accept=".png, .jpg, .jpeg, .gif" />
			</div>
		</div>
	</div>
	<p class="form-title mb12">배너 문구</p>
	<div class="form-grid mb36">
		<div class="form-grid-column">
			<p class="form-title w70">텍스트1</p>
			<div class="form-input"><input type="text" /></div>
		</div>
		<div></div>
		<div class="form-grid-column">
			<p class="form-title w70">텍스트2</p>
			<div class="form-input"><input type="text" /></div>
		</div>
		<div></div>
		<div class="form-grid-column">
			<p class="form-title w70">버튼명</p>
			<div class="form-input"><input type="text" /></div>
		</div>
		<div></div>
	</div>
	<p class="form-title mb12">URL 이동</p>
	<div class="form-input mb36">
		<input type="text" />
	</div>
	<p class="form-title mb12">노출 기간</p>
	<div class="form-grid">
		<div class="form-grid-column">
			<div class="form-input">
				<input type="date" />
			</div>
			~
			<div class="form-input">
				<input type="date" />
			</div>
		</div>
	</div>
	<div class="buttons-container buttons--right mt36 mb36">
		<button class="button--black">등록</button>
	</div>
</template>

<script setup>
definePageMeta({
	middleware: 'auth',
});
</script>

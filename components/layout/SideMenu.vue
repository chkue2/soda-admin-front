<template>
	<div id="sideMenu">
		<div class="side-menu-top">
			<NuxtLink to="/"><img src="/img/icon/logo-circle.svg" /></NuxtLink>
			<div class="side-menu-top-text">
				<p class="side-menu-top-title">Soda Admin</p>
				<p class="side-menu-top-content">Workspace</p>
			</div>
		</div>
		<div class="side-menu-container">
			<div
				v-for="(menu, index) in menusArray"
				:key="index"
				class="side-menu-wrapper"
			>
				<div class="side-menu-toggle" @click="handlerClickToggleMenu(index)">
					<span>{{ menu.title }}</span>
					<img src="/img/icon/expand-right-black-bold.svg" />
				</div>
				<div class="side-menu-sub-wrapper" :class="{ open: menuOpens[index] }">
					<div v-for="(s, index2) in menu.submenus" :key="index2">
						<NuxtLink
							class="side-menu-sub-item"
							:class="{ active: s.active }"
							:to="s.to"
						>
							<div class="side-menu-sub-left">
								<img
									:src="`/img/icon/${s.active ? s.activeIcon : s.icon}`"
									alt="알림"
								/>
								<span>{{ s.title }}</span>
							</div>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<div
			class="side-menu-bottom"
			:class="{ open: bottomMenuOpen }"
			@mouseover="
				() => {
					bottomMenuOpen = true;
				}
			"
			@mouseleave="
				() => {
					bottomMenuOpen = false;
				}
			"
		>
			<div class="bottom-left">
				<img
					src="/img/icon/profile-empty.png"
					alt="프로필 사진"
					class="bottom-left-profile"
				/>
				<div class="bottom-text">
					<p class="bottom-name">{{ authStore.user?.profile?.userId }}</p>
				</div>
			</div>
			<img
				src="/img/icon/more-dot-black.svg"
				alt="프로필 더보기"
				class="bottom-right"
			/>
			<div class="side-menu-bottom-submenu">
				<div class="bottom-menu-item" @click="toggleInfoUpdateModal">
					어드민 정보 수정
				</div>
				<div
					class="bottom-menu-item"
					@click="
						() => {
							authStore.logout();
							router.go(0);
						}
					"
				>
					로그아웃
				</div>
			</div>
		</div>
	</div>
	<AdminInfoUpdateModal
		v-if="isInfoUpdateModalShow"
		@close-modal="toggleInfoUpdateModal"
	/>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import AdminInfoUpdateModal from '~/components/modal/AdminInfoUpdateModal';

import { menus } from '~/assets/js/menus.js';
import { useAuthStore } from '~/store/auth.js';

const route = useRoute();
const router = useRouter();

const authStore = useAuthStore();

const menuOpens = ref(new Array(menus.length).fill(true));
const bottomMenuOpen = ref(false);
const isInfoUpdateModalShow = ref(false);

const menusArray = computed(() =>
	menus.reduce((acc, cur) => {
		cur.submenus = cur.submenus.reduce((acc, cur) => {
			acc.push({ ...cur, active: route.fullPath.includes(cur.to) });
			return acc;
		}, []);
		acc.push(cur);
		return acc;
	}, []),
);

const handlerClickToggleMenu = i => {
	menuOpens.value = menuOpens.value.map((m, index) => (index === i ? !m : m));
};

const toggleInfoUpdateModal = () => {
	isInfoUpdateModalShow.value = !isInfoUpdateModalShow.value;
};
</script>

<style scoped lang="scss">
#sideMenu {
	width: 260px;
	height: 100vh;
	background-color: #ffffff;
	position: sticky;
	top: 0;
	left: 0;
	border-right: 1px solid #e8e8e8;
	float: left;
	overflow-x: hidden;
	overflow-y: auto;
	z-index: 2;
}
.side-menu-top {
	display: flex;
	gap: 12px;
	padding: 16px;
	.side-menu-logo {
		width: 33px;
		height: 35px;
	}
	.side-menu-top-text {
		display: flex;
		flex-direction: column;
	}
	.side-menu-top-title {
		font-size: 14px;
		font-weight: $ft-semibold;
		margin-bottom: 2px;
		line-height: 20px;
	}
	.side-menu-top-content {
		font-size: 12px;
		color: #bababa;
		line-height: 17px;
	}
}
.side-menu-sub-container {
	padding: 16px;
	&.bb {
		border-bottom: 1px solid #e2e1e7;
	}
}
.side-menu-sub-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6px 12px;
	cursor: pointer;
	text-decoration: none;
	& + .side-menu-sub-item {
		margin-top: 4px;
	}
	&.active {
		background-color: #f6f6f6;
		span {
			color: #000000;
			font-weight: $ft-medium;
		}
	}
}
.side-menu-sub-left {
	display: flex;
	gap: 12px;
	& > img {
		width: 20px;
		height: 20px;
		margin-top: 2px;
	}
	& > span {
		font-size: 14px;
		color: #7c7b84;
		line-height: 22px;
	}
}
.side-menu-notification-count {
	padding: 2px 4px 0;
	line-height: 17px;
	color: #ffffff;
	font-size: 12px;
	font-weight: $ft-medium;
	background-color: #e92e50;
	border-radius: 2px;
}
.side-menu-container {
	padding: 16px 16px 130px;
}
.side-menu-toggle {
	margin-bottom: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	& > span {
		font-size: 12px;
		font-weight: $ft-bold;
		color: #7c7b84;
	}
	& > img {
		width: 16px;
		height: 16px;
	}
}
.side-menu-wrapper + .side-menu-wrapper {
	margin-top: 40px;
}
.side-menu-sub-wrapper {
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.3s ease-in-out;
	&.open {
		max-height: 2000px;
	}
}
.side-menu-bottom {
	width: 260px;
	padding: 16px;
	background-color: #f6f6f6;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0;
	&.open {
		.side-menu-bottom-submenu {
			opacity: 1;
			visibility: visible;
		}
	}
	.bottom-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.bottom-left-profile {
		width: 44px;
		height: 44px;
		border-radius: 50%;
	}
	.bottom-left-text {
		display: flex;
		flex-direction: column;
	}
	.bottom-name {
		font-size: 14px;
		line-height: 20px;
	}
	.bottom-position {
		font-size: 12px;
		line-height: 17px;
		color: #7c7884;
	}
	.bottom-right {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
}
.side-menu-bottom-submenu {
	position: absolute;
	right: -135px;
	bottom: 25px;
	background-color: #f5f5f5;
	border-radius: 8px;
	padding: 12px;
	box-shadow: 1px 1px 12px 0px #bcbcbc;
	visibility: hidden;
	transition: all 0.2s linear;
}
.bottom-menu-item {
	font-size: 14px;
	padding: 8px 12px;
	cursor: pointer;
	& + .bottom-menu-item {
		border-top: 1px solid #e1e1e1;
	}
}
</style>

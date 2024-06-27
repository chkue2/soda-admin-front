/*
 * 기본 RULE
 * LIST      목록
 * GET       단일
 * UPDATE    수정
 * CREATE    등록
 * REMOVE    삭제
 *
 * */

const API_URL = {
	AUTH: {
		LOGIN: '/auth/login',
		LOGOUT: '/auth/logout',
		REFRESH: '/auth/refresh',
	},
	MEMBER: {
		LIST: '/user/list',
		DETAIL: '/user/:user_id',
		SET: '/user/state',
	},
	REVIEW: {
		LIST: '/client-grade/list',
		UPDATE_STATE: '/client-grade',
	},
	INQUIRY: {
		LIST: '/soda-inquiry/list',
		DETAIL: '/soda-inquiry/:seq',
		SET: '/soda-inquiry/:seq',
	},
	NOTICE: {
		LIST: '/soda-notice/list',
		SET: '/soda-notice/:board_id',
		DETAIL: '/soda-notice/:board_id',
	},
};

export default API_URL;

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
	ADMIN: {
		GET: '/admin-user',
		UPDATE: '/admin-user/update',
	},
	MEMBER: {
		LIST: '/user/list',
		DETAIL: '/user/:user_id',
		SET: '/user/state',
		LIST_OUT: '/user/resign/list',
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
		UPDATE_STATE: '/soda-notice/state',
	},
	TERMS: {
		USE_LIST: '/terms/use/list',
		USE_DETAIL: '/terms/use/:seq',
		USE_SET: '/terms/use/:seq',
		PRIVACY_LIST: '/terms/privacy/list',
		PRIVACY_DETAIL: '/terms/privacy/:seq',
		PRIVACY_SET: '/terms/privacy/:seq',
	},
};

export default API_URL;

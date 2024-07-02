import {
	API_URL,
	GET_AUTH,
	POST_AUTH,
	getEndpoint,
} from '~/composables/useApi.js';

export const notice = {
	async getList(searchForm) {
		return await GET_AUTH(API_URL.NOTICE.LIST, searchForm);
	},
	async setNotice(data) {
		const endpoint = getEndpoint(API_URL.NOTICE.SET, {
			board_id: data.boardId,
		});
		return await POST_AUTH(endpoint, data);
	},
	async getDetail(boardId) {
		const endpoint = getEndpoint(API_URL.NOTICE.DETAIL, { board_id: boardId });
		return await GET_AUTH(endpoint);
	},
	async updateNoticeState(data) {
		return await POST_AUTH(API_URL.NOTICE.UPDATE_STATE, data);
	},
};

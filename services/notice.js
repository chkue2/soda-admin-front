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
};

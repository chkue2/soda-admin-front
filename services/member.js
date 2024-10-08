import {
	API_URL,
	GET_AUTH,
	POST_AUTH,
	getEndpoint,
} from '~/composables/useApi.js';

export const member = {
	async getList(searchForm) {
		return await GET_AUTH(API_URL.MEMBER.LIST, searchForm);
	},
	async getDetail(userId) {
		const endpoint = getEndpoint(API_URL.MEMBER.DETAIL, { user_id: userId });
		return await GET_AUTH(endpoint);
	},
	async setState(data) {
		return await POST_AUTH(API_URL.MEMBER.SET, data);
	},
	async getOutList(searchForm) {
		return await GET_AUTH(API_URL.MEMBER.LIST_OUT, searchForm);
	},
};

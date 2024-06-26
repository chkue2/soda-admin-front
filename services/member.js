import { API_URL, GET_AUTH, getEndpoint } from '~/composables/useApi.js';

export const member = {
	async getList(searchForm) {
		return await GET_AUTH(API_URL.MEMBER.LIST, searchForm);
	},
	async getDetail(userId) {
		const endpoint = getEndpoint(API_URL.MEMBER.DETAIL, { user_id: userId });
		return await GET_AUTH(endpoint);
	},
};

import { API_URL, GET_AUTH } from '~/composables/useApi.js';

export const member = {
	async getList(searchForm) {
		return await GET_AUTH(API_URL.MEMBER.LIST, searchForm);
	},
};

import { API_URL, GET_AUTH } from '~/composables/useApi.js';

export const inquiry = {
	async getList(searchForm) {
		return await GET_AUTH(API_URL.INQUIRY.LIST, searchForm);
	},
};

import { API_URL, GET_AUTH } from '~/composables/useApi.js';

export const notice = {
	async getList(searchForm) {
		return await GET_AUTH(API_URL.NOTICE.LIST, searchForm);
	},
};

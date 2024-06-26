import { API_URL, GET_AUTH, POST_AUTH } from '~/composables/useApi.js';

export const review = {
	async getList(searchForm) {
		return await GET_AUTH(API_URL.REVIEW.LIST, searchForm);
	},
	async updateState(data) {
		return await POST_AUTH(API_URL.REVIEW.UPDATE_STATE, data);
	},
};

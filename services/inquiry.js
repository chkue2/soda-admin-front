import {
	API_URL,
	GET_AUTH,
	POST_AUTH,
	getEndpoint,
} from '~/composables/useApi.js';

export const inquiry = {
	async getList(searchForm) {
		return await GET_AUTH(API_URL.INQUIRY.LIST, searchForm);
	},
	async getDetail(seq) {
		const endpoint = getEndpoint(API_URL.INQUIRY.DETAIL, { seq });
		return await GET_AUTH(endpoint);
	},
	async setInquiryAnswer(data) {
		const endpoint = getEndpoint(API_URL.INQUIRY.SET, { seq: data.seq });
		return await POST_AUTH(endpoint, data);
	},
};

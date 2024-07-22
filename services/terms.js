import {
	API_URL,
	GET_AUTH,
	POST_AUTH,
	getEndpoint,
} from '~/composables/useApi.js';

export const terms = {
	async getUseList(searchForm) {
		return await GET_AUTH(API_URL.TERMS.USE_LIST, searchForm);
	},
	async getUseDetail(seq) {
		const endpoint = getEndpoint(API_URL.TERMS.USE_DETAIL, { seq });
		return await GET_AUTH(endpoint);
	},
	async setUse(form) {
		const endpoint = getEndpoint(API_URL.TERMS.USE_SET, { seq: form.seq });
		return await POST_AUTH(endpoint, form);
	},
	async getPrivacyList(searchForm) {
		return await GET_AUTH(API_URL.TERMS.PRIVACY_LIST, searchForm);
	},
	async getPrivacyDetail(seq) {
		const endpoint = getEndpoint(API_URL.TERMS.PRIVACY_DETAIL, { seq });
		return await GET_AUTH(endpoint);
	},
	async setPrivacy(form) {
		const endpoint = getEndpoint(API_URL.TERMS.PRIVACY_SET, { seq: form.seq });
		return await POST_AUTH(endpoint, form);
	},
};

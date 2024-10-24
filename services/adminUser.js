import {
	API_URL,
	GET_AUTH,
	POST_AUTH,
	getEndpoint,
} from '~/composables/useApi.js';

export const adminUser = {
	async getAdminUser(userId) {
		return await GET_AUTH(API_URL.ADMIN.GET, { userId });
	},
	async updateAdminUser(form) {
		return await POST_AUTH(API_URL.ADMIN.UPDATE, form);
	},
};

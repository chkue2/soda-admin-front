import { defineStore } from 'pinia';
import { POST } from '~/composables/useApi.js';
import { tokenApi, userSessionKey } from '~/utils/tokenApi';

export const useAuthStore = defineStore(
	'auth',
	{
		state: () => ({
			user: null,
		}),
		actions: {
			initialize() {
				this.user =
					(typeof window !== 'undefined' &&
						JSON.parse(localStorage.getItem(userSessionKey))) ||
					null;
			},
			async login(credentials) {
				try {
					const response = await POST('/auth/login', credentials);
					if (response && response.data) {
						tokenApi.setToken(response.data.token, response.data.refreshToken);
						this.userProfile(response.data.userId);
						return true;
					}

					return false;
				} catch (e) {
					return false;
				}
			},
			logout() {
				this.user = null;
				if (typeof window !== 'undefined') {
					tokenApi.clearAll();
				}
				return true;
			},
			userProfile(userId) {
				this.user = {
					profile: {
						userId,
					},
				};
				if (typeof window !== 'undefined') {
					localStorage.setItem(userSessionKey, JSON.stringify(this.user));
				}
			},
		},
	},
	{
		persist: true,
	},
);

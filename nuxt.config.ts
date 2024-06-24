// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				{
					name: 'viewport',
					content:
						'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
				},
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css',
				},
				{
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css',
				},
			],
			script: [
				{
					src: 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
				},
				{
					src: 'https://code.jquery.com/jquery-3.5.1.min.js',
				},
				{
					src: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',
				},
				{
					src: 'https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js',
				},
			],
		},
	},
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			apiURL: process.env.API_URL,
		},
	},
	plugins: ['~/plugins/router.js'],
	ssr: false,
	modules: ['@pinia/nuxt'],
	css: ['~/assets/scss/_style.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "~/assets/scss/_variables.scss";`,
				},
			},
		},
	},
});

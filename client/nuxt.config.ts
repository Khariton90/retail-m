export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	runtimeConfig: {
		api: 'http://localhost:3001/api/bitcoin-price',
	},
	devtools: { enabled: false },
	dir: {
		pages: './app/routes',
		layouts: './app/layouts',
		plugins: './app/plugins',
		public: './shared/public',
		assets: './app/assets',
		middleware: './app/middleware',
	},
	css: ['./app/assets/main.css'],
	modules: ['nuxt-charts', '@nuxt/ui', , 'dayjs-nuxt', '@pinia/nuxt'],
	dayjs: {
		locales: ['ru'],
		plugins: ['relativeTime', 'utc', 'timezone'],
		defaultLocale: 'ru',
		defaultTimezone: 'Europe/Moscow',
	},
	colorMode: {
		preference: 'system',
		fallback: 'dark',
		classSuffix: '',
		storageKey: 'color-mode',
	},
})

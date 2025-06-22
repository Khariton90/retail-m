export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	runtimeConfig: {
		api: process.env.API,
	},
	devtools: { enabled: true },
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
		preference: 'system', // Режим по умолчанию (можешь выбрать light/dark/system)
		fallback: 'dark', // Цветовая схема, применяемая при отсутствии предпочтений браузера
		classSuffix: '', // Пустой суффикс классов (цветовая схема добавляется прямо в тег html)
		storageKey: 'color-mode', // Имя ключа в localStorage для запоминания выбранной схемы
	},
})

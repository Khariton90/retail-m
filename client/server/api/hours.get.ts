const config = useRuntimeConfig()

export default defineEventHandler(async event => {
	const baseUrl = config.api

	try {
		return await $fetch(`${baseUrl}/bitcoin-price/day`)
	} catch (err) {
		console.error(err)
		return []
	}
})

const config = useRuntimeConfig()

export default defineEventHandler(async event => {
	try {
		const baseUrl = config.api
		const queryParams = getQuery(event)
		const limit = queryParams.limit ? `limit=${queryParams.limit}` : `limit`

		return await $fetch(
			`${baseUrl}/bitcoin-price/?start=${queryParams.start}&end=${queryParams.end}&${limit}`
		)
	} catch (err) {
		console.error(err)
		return []
	}
})

<template>
	<FilterWidget />
	<PriceChartWidget :data="data" />
</template>

<script setup lang="ts">
import { PriceChartWidget } from '~/widgets/PriceChartWIdget'
import { useStore } from '~/app/store'
import { FilterWidget } from '~/widgets/FilterWidget'
import type { BitcoinPrice } from '~/entities/BitcoinPrice'

const $store = useStore()
const data = computed(() => $store.data)

onMounted(() => {
	navigateTo('/')
})

watchEffect(async () => {
	if ($store.selectedQuery === 'day') {
		const response = await $fetch<BitcoinPrice[]>(`/api/hours`, {
			query: $store.currentQuery,
		})
		$store.setData(response)
	} else {
		const response = await $fetch<BitcoinPrice[]>(`/api/history`, {
			query: $store.currentQuery,
		})
		$store.setData(response)
	}
})
</script>

<template>
	<div class="chart-wrapper">
		<div class="chart">
			<LineChart
				:data="data"
				:categories="categories"
				X
				:height="500"
				y-label="Сумма"
				:x-num-ticks="4"
				:y-num-ticks="4"
				:curve-type="CurveType.Linear"
				:legend-position="LegendPosition.Top"
				:hide-legend="false"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { LineChart } from 'vue-chrts'
import { DATETIME_ISO_FORMAT } from '~/shared'
import type { BitcoinPrice } from '~/entities/BitcoinPrice'

const props = defineProps<{ data: BitcoinPrice[] }>()
const dayjs = useDayjs()

const data = computed(() => {
	return props.data.map(el => ({
		time: dayjs.unix(el.timestamp).format(DATETIME_ISO_FORMAT),
		close: el.close,
	}))
})

const categories = {
	close: {
		name: 'Цена закрытия',
		color: '#ffba4e',
	},
}
</script>

<style scoped>
.chart-wrapper {
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
}

.chart {
	width: 100%;
}
</style>

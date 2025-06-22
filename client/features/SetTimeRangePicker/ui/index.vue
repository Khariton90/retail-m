<template>
	<UPopover>
		<UButton
			color="neutral"
			variant="outline"
			icon="i-lucide-calendar"
		></UButton>

		<template #content>
			<UCalendar
				color="warning"
				v-model="modelValue"
				class="p-2"
				:number-of-months="2"
				range
			/>
		</template>
	</UPopover>
</template>

<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { useStore } from '~/app/store'

import { setCalendarDate } from '../lib'
import dayjs from 'dayjs'
import { PeriodQuery } from '~/features/ChangeQuery'
import type { BitcoinPrice } from '~/entities/BitcoinPrice'

const $store = useStore()

const start = computed(() => $store.currentQuery.start)
const end = computed(() => $store.currentQuery.end)
const modelValue = shallowRef({
	start: new CalendarDate(...setCalendarDate(start.value)),
	end: new CalendarDate(...setCalendarDate(end.value)),
})

watch(modelValue, async (next, prev) => {
	const dateStart = `${next.start.year}-${next.start.month}-${next.start.day}`
	const dateEnd = `${next.end.year}-${next.end.month}-${next.end.day}`
	navigateTo(`/?start=${dateStart}&end=${dateEnd}`)

	const valueStart = dayjs(dateStart).unix()
	const valueEnd = dayjs(dateEnd).unix()

	$store.setQuery(
		{
			start: valueStart,
			end: valueEnd,
		},
		PeriodQuery.Year
	)

	const response = await $fetch<BitcoinPrice[]>('/api/history', {
		query: { start: valueStart, end: valueEnd },
	})
	$store.setData(response)
})
</script>

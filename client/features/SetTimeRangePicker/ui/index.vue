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
				:min-value="minDate"
				:max-value="maxDate"
			/>
		</template>
	</UPopover>
</template>

<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { useStore } from '~/app/store'
import { getDateFromCalendar, setCalendarDate } from '../lib'
import { PeriodQuery } from '~/features/ChangeQuery'
import type { BitcoinPrice } from '~/entities/BitcoinPrice'
import dayjs from 'dayjs'

const currentDate = dayjs()
const yearAgo = currentDate.subtract(1, 'year')
const minDate = new CalendarDate(...setCalendarDate(yearAgo.unix()))
const maxDate = new CalendarDate(...setCalendarDate(currentDate.unix()))

const $store = useStore()
const period = computed(() => $store.currentQuery)

const modelValue = shallowRef({
	start: new CalendarDate(...setCalendarDate(period.value.start)),
	end: new CalendarDate(...setCalendarDate(period.value.end)),
})

watch(modelValue, async ({ start, end }) => {
	const dateStart = getDateFromCalendar(start.year, start.month, start.day)
	const dateEnd = getDateFromCalendar(end.year, end.month, end.day)

	navigateTo(`/?start=${dateStart}&end=${dateEnd}`)

	const valueStart = dayjs(dateStart).unix()
	const valueEnd = dayjs(dateEnd).unix()

	$store.setQuery(
		{ start: dayjs(dateStart).unix(), end: valueEnd },
		PeriodQuery.Year
	)

	const response = await $fetch<BitcoinPrice[]>('/api/history', {
		query: { start: valueStart, end: valueEnd },
	})

	$store.setData(response)
})
</script>

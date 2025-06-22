import dayjs from 'dayjs'
import { defineStore } from 'pinia'
import type { BitcoinPrice } from '~/entities/BitcoinPrice'
import { PeriodQuery, type Query } from '~/features/ChangeQuery'

interface Store {
	currentQuery: Query
	selectedQuery: PeriodQuery
	data: BitcoinPrice[]
}

const now = dayjs()
const start = now.add(24, 'hour').unix()
const end = now.unix()

export const useStore = defineStore('main', {
	state: (): Store => ({
		currentQuery: {
			start: start,
			end: end,
		},
		selectedQuery: PeriodQuery.Day,
		data: [],
	}),
	actions: {
		setQuery(query: Query, selectedQuery: PeriodQuery) {
			this.selectedQuery = selectedQuery
			this.currentQuery = query
		},
		setData(data: BitcoinPrice[]) {
			this.data = data
		},
	},
})

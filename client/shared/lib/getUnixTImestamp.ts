import dayjs from 'dayjs'
import type { Query } from '~/features/ChangeQuery'

enum PeriodQuery {
	Day = 'day',
	Week = 'week',
	Month = 'month',
	Year = 'year',
}

const WEEK_COUNT = 7
const YEAR_COUNT = 365
const HOUR_COUNT = 24

function getPeriodDays(period: PeriodQuery) {
	const now = dayjs()

	switch (period) {
		case 'week':
			return WEEK_COUNT
		case 'month':
			return now.daysInMonth()
		case 'year':
			return YEAR_COUNT
	}
}

export function getUnixTimestamp(query: PeriodQuery): Query {
	const now = dayjs()

	if (query === 'day') {
		const start = now.add(HOUR_COUNT, 'hour').unix()
		return { start, end: now.unix() }
	}

	const start = now.subtract(1, query).unix()
	const limit = getPeriodDays(query)
	return { start, end: now.unix(), limit }
}

import dayjs from 'dayjs'
import type { Query } from '~/features/ChangeQuery'

enum PeriodQuery {
	Day = 'day',
	Week = 'week',
	Month = 'month',
	Year = 'year',
}

const take = {
	[PeriodQuery.Week]: 7,
	[PeriodQuery.Month]: 31,
	[PeriodQuery.Year]: 365,
}

export function getUnixTimestamp(query: PeriodQuery): Query {
	const now = dayjs()
	const start =
		query === 'day' ? dayjs().add(24, 'hour').unix() : now.startOf(query).unix()
	const limit = query === 'day' ? undefined : take[query]

	return { start, end: now.unix(), limit }
}

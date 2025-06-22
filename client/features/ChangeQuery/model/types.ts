export enum PeriodQuery {
	Day = 'day',
	Week = 'week',
	Month = 'month',
	Year = 'year',
}

export interface Query {
	start: number
	end: number
	limit?: number
}

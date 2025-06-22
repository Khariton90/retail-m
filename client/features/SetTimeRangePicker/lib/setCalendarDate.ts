import dayjs from 'dayjs'

export const setCalendarDate = (
	timestamp: number
): [number, number, number] => {
	const parsedDate = dayjs.unix(timestamp)

	const year = parsedDate.year()
	const month = parsedDate.month() + 1
	const day = parsedDate.date()

	return [year, month, day]
}

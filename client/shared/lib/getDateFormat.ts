import dayjs from 'dayjs'

export const DATETIME_ISO_FORMAT = 'YYYY DD MMMM HH:mm'
export const DATE_FORMAT = 'YYYY-MM-DD'

export function getDateFormat(timestamp: number) {
	return dayjs.unix(timestamp).format(DATE_FORMAT)
}

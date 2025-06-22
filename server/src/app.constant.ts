export const ENV_FILE_PATH = './.env';
const API_PATH = 'https://min-api.cryptocompare.com/data/v2';
export const BITCOIN_LAST_24_HOURS_HISTORY_API = `${API_PATH}/histohour?fsym=BTC&tsym=USD&limit=24`;
export const BITCOIN_LAST_YEAR_HISTORY_API = `${API_PATH}/histoday?fsym=BTC&tsym=USD&limit=365`;

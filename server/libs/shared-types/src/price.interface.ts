export interface Price {
  time: number;
  high: number;
  low: number;
  open: number;
  volumefrom: number;
  volumeto: number;
  close: number;
  conversionType: string;
  conversionSymbol: string;
  id?: number;
}

export interface BitcoinPrice {
  timestamp: number;
  close: number;
  id?: number;
  createdAt?: Date;
}

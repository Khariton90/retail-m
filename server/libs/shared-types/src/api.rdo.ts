import { Price } from './price.interface';

export interface ApiData {
  Aggregated: boolean;
  TimeFrom: number;
  TimeTo: number;
  Data: Price[];
}

export interface ApiRdo {
  Response: string;
  Message: string;
  HasWarning: boolean;
  Type: number;
  RateLimit: object;
  Data: ApiData;
}

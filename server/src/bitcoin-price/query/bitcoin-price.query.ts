import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { DEFAULT_LIMIT } from '../bitcoin-price.consts';

export class BitcoinPriceQuery {
  @Transform(({ value }) => Number(value))
  @Expose()
  public start: number;

  @Transform(({ value }) => Number(value))
  @Expose()
  public end: number;

  @Transform(({ value }) => Number(value))
  @Expose()
  @IsOptional()
  public limit: number = DEFAULT_LIMIT;
}

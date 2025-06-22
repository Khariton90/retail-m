import { Entity } from '@/core';
import { BitcoinPrice } from '@/shared-types';

export class BitcoinPriceEntity
  implements Entity<BitcoinPriceEntity>, BitcoinPrice
{
  id: number;
  timestamp: number;
  close: number;
  createdAt: Date;

  constructor(price: BitcoinPrice) {
    this.fillEntity(price);
  }

  public toObject(): BitcoinPriceEntity {
    return { ...this };
  }

  public fillEntity(entity: BitcoinPrice): void {
    for (const key in entity) {
      this[key] = entity[key];
    }
  }
}

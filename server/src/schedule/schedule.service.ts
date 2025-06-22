import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BitcoinPriceService } from 'src/bitcoin-price/bitcoin-price.service';
import { ExchangeApiService } from 'src/exchange-api/exchange-api.service';
import { ENTRY_ADDED, ENTRY_EXIST } from './shedule.consts';

@Injectable()
export class ScheduleService {
  private readonly logger = new Logger(ScheduleService.name);
  constructor(
    private readonly exchangeService: ExchangeApiService,
    private readonly bitcoinPriceService: BitcoinPriceService,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async getEveryHour() {
    try {
      const data = await this.exchangeService.getLastHour();
      const price = data.Data.Data[1];

      if (!price) return;

      const existPrice = await this.bitcoinPriceService.findByDate(price.time);

      if (existPrice) return this.logger.log(ENTRY_EXIST);

      await this.bitcoinPriceService.create({
        timestamp: price.time,
        close: price.close,
      });

      this.logger.log(ENTRY_ADDED);
    } catch {
      throw new NotFoundException();
    }
  }
}

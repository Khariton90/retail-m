import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

import { ScheduleModule } from '@nestjs/schedule';
import { ExchangeApiModule } from 'src/exchange-api/exchange-api.module';
import { BitcoinPriceModule } from 'src/bitcoin-price/bitcoin-price.module';

@Module({
  imports: [ScheduleModule.forRoot(), ExchangeApiModule, BitcoinPriceModule],
  providers: [ScheduleService],
})
export class MainScheduleModule {}

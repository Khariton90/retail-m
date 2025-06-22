import { Module } from '@nestjs/common';
import { ExchangeApiService } from './exchange-api.service';
import { ExchangeApiController } from './exchange-api.controller';
import { HttpModule } from '@nestjs/axios';
import { BitcoinPriceModule } from 'src/bitcoin-price/bitcoin-price.module';

@Module({
  imports: [HttpModule, BitcoinPriceModule],
  controllers: [ExchangeApiController],
  providers: [ExchangeApiService],
  exports: [ExchangeApiService],
})
export class ExchangeApiModule {}

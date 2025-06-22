import { Module } from '@nestjs/common';
import { BitcoinPriceService } from './bitcoin-price.service';
import { BitcoinPriceController } from './bitcoin-price.controller';
import { BitcoinPriceRepository } from './bitcoin-price.repository';

@Module({
  controllers: [BitcoinPriceController],
  providers: [BitcoinPriceService, BitcoinPriceRepository],
  exports: [BitcoinPriceService],
})
export class BitcoinPriceModule {}

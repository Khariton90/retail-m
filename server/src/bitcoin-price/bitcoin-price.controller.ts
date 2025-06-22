import { Controller, Get, Query } from '@nestjs/common';
import { BitcoinPriceService } from './bitcoin-price.service';
import { BitcoinPriceQuery } from './query/bitcoin-price.query';

@Controller('bitcoin-price')
export class BitcoinPriceController {
  constructor(private readonly bitcoinPriceService: BitcoinPriceService) {}

  @Get('/')
  findAll(@Query() query: BitcoinPriceQuery) {
    return this.bitcoinPriceService.findAll(query);
  }

  @Get('day')
  findByDay() {
    return this.bitcoinPriceService.findByDay();
  }
}

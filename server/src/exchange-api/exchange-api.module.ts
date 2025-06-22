import { Module } from '@nestjs/common';
import { ExchangeApiService } from './exchange-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ExchangeApiService],
  exports: [ExchangeApiService],
})
export class ExchangeApiModule {}

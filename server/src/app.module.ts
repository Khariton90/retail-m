import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitcoinPriceModule } from './bitcoin-price/bitcoin-price.module';
import { ExchangeApiModule } from './exchange-api/exchange-api.module';
import { MainScheduleModule } from './schedule/schedule.module';
import { ConfigModule } from '@nestjs/config';
import envSchema from './env.schema';
import { ENV_FILE_PATH } from './app.constant';
import { PrismaModule } from './prisma/prisma.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      validationSchema: envSchema,
    }),
    PrismaModule,
    BitcoinPriceModule,
    ExchangeApiModule,
    MainScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

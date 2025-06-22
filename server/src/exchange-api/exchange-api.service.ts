import { ApiRdo } from '@/shared-types';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { BitcoinPriceService } from 'src/bitcoin-price/bitcoin-price.service';

@Injectable()
export class ExchangeApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly bitcoinPriceService: BitcoinPriceService,
  ) {}

  public async getHistoryToday() {
    return lastValueFrom(
      this.httpService
        .get(
          'https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=1',
        )
        .pipe(
          map((response: AxiosResponse<ApiRdo>) => response.data),
          catchError((error) => {
            console.error('Ошибка при получении данных:', error);
            return null;
          }),
        ),
    ) as unknown as ApiRdo;
  }
}

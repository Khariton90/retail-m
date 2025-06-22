import { ApiRdo } from '@/shared-types';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { FAILED_TO_FETCH_MESSAGE } from './exchange-api.consts';
import { BITCOIN_LAST_HOUR_HISTORY_API } from 'src/app.constant';

@Injectable()
export class ExchangeApiService {
  constructor(private readonly httpService: HttpService) {}

  public async getLastHour() {
    return lastValueFrom(
      this.httpService.get(BITCOIN_LAST_HOUR_HISTORY_API).pipe(
        map((response: AxiosResponse<ApiRdo>) => response.data),
        catchError((error) => {
          console.error(FAILED_TO_FETCH_MESSAGE, error);
          return null;
        }),
      ),
    ) as unknown as ApiRdo;
  }
}

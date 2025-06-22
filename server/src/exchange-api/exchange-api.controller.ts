import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExchangeApiService } from './exchange-api.service';
import { CreateExchangeApiDto } from './dto/create-exchange-api.dto';
import { UpdateExchangeApiDto } from './dto/update-exchange-api.dto';

@Controller('exchange-api')
export class ExchangeApiController {
  constructor(private readonly exchangeApiService: ExchangeApiService) {}
}

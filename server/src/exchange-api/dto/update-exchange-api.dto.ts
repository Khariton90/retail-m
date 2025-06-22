import { PartialType } from '@nestjs/mapped-types';
import { CreateExchangeApiDto } from './create-exchange-api.dto';

export class UpdateExchangeApiDto extends PartialType(CreateExchangeApiDto) {}

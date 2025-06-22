import { BadRequestException, Injectable } from '@nestjs/common';
import { BitcoinPriceRepository } from './bitcoin-price.repository';
import { BitcoinPriceEntity } from './entities/bitcoin-price.entity';
import { BitcoinPriceQuery } from './query/bitcoin-price.query';
import { BitcoinPrice } from '@/shared-types';
import { BAD_REQUEST_MESSAGE } from './bitcoin-price.consts';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

@Injectable()
export class BitcoinPriceService {
  constructor(
    private readonly bitcoinPriceRepository: BitcoinPriceRepository,
  ) {}

  async create(createBitcoinPriceDto: {
    close: number;
    timestamp: number;
  }): Promise<BitcoinPrice | null> {
    try {
      const entity = new BitcoinPriceEntity(createBitcoinPriceDto);
      return await this.bitcoinPriceRepository.addHourPrice(entity);
    } catch (err) {
      throw new BadRequestException(BAD_REQUEST_MESSAGE, err.message);
    }
  }

  async findAll(query: BitcoinPriceQuery) {
    try {
      return await this.bitcoinPriceRepository.findByDate(query);
    } catch (err) {
      throw new BadRequestException(BAD_REQUEST_MESSAGE, err.message);
    }
  }

  async findByDay() {
    try {
      const result = await this.bitcoinPriceRepository.findByHourDay();
      return result.reverse();
    } catch (err) {
      throw new BadRequestException(BAD_REQUEST_MESSAGE, err.message);
    }
  }

  async findByDate(timestamp: number) {
    try {
      return await this.bitcoinPriceRepository.findOne(timestamp);
    } catch {
      return null;
    }
  }
}

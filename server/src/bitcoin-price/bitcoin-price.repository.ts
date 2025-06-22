import { BitcoinPrice } from '@/shared-types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BitcoinPriceEntity } from './entities/bitcoin-price.entity';
import { BitcoinPriceQuery } from './query/bitcoin-price.query';
import { DEFAULT_LIMIT } from './bitcoin-price.consts';

@Injectable()
export class BitcoinPriceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByDate(query: BitcoinPriceQuery): Promise<BitcoinPrice[]> {
    const timestamp = {
      gte: query.start,
      lte: query.end,
    };

    const where = query ? { timestamp } : {};

    return this.prisma.yearPrice.findMany({
      where,
      orderBy: {
        timestamp: 'asc',
      },
      take: query.limit || undefined,
    });
  }

  async findByHourDay(): Promise<BitcoinPrice[]> {
    return await this.prisma.dayPrice.findMany({
      orderBy: {
        timestamp: 'desc',
      },
      take: DEFAULT_LIMIT,
    });
  }

  async addHourPrice(price: BitcoinPriceEntity): Promise<BitcoinPrice> {
    return await this.prisma.dayPrice.create({
      data: { ...price.toObject() },
    });
  }

  async findOne(timestamp: number): Promise<BitcoinPrice | null> {
    return await this.prisma.dayPrice.findUnique({ where: { timestamp } });
  }
}

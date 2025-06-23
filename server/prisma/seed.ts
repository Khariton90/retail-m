import { BITCOIN_LAST_24_HOURS_HISTORY_API } from './../src/app.constant';
import { PrismaClient } from '@prisma/client';
import { ApiRdo, BitcoinPrice } from '@/shared-types';
import { Logger } from '@nestjs/common';
import { BITCOIN_LAST_YEAR_HISTORY_API } from '../src/app.constant';

const prisma = new PrismaClient();

async function getPrice(url: string): Promise<BitcoinPrice[]> {
  try {
    const response = await fetch(url);
    const data: ApiRdo = await response.json();
    const result = data.Data.Data.map((el) => ({
      timestamp: el.time,
      close: el.close,
    }));

    return result;
  } catch (err) {
    console.error(err.message);
  }
}

async function main() {
  const [yearPriceList, dayPriceList] = await Promise.all([
    getPrice(BITCOIN_LAST_YEAR_HISTORY_API),
    getPrice(BITCOIN_LAST_24_HOURS_HISTORY_API),
  ]);

  await Promise.all(
    yearPriceList.map((price) => {
      return prisma.yearPrice.upsert({
        where: { timestamp: price.timestamp },
        update: {},
        create: {
          timestamp: price.timestamp,
          close: price.close,
        },
      });
    }),
  );

  await Promise.all(
    dayPriceList.map((price) => {
      return prisma.dayPrice.upsert({
        where: { timestamp: price.timestamp },
        update: {},
        create: {
          timestamp: price.timestamp,
          close: price.close,
        },
      });
    }),
  );

  Logger.log(`🚀 Data uploaded successfully`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

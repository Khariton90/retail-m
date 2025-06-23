-- CreateTable
CREATE TABLE "DayPrice" (
    "id" SERIAL NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "close" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DayPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YearPrice" (
    "id" SERIAL NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "close" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "YearPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DayPrice_timestamp_key" ON "DayPrice"("timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "YearPrice_timestamp_key" ON "YearPrice"("timestamp");

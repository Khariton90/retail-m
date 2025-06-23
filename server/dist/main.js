/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.constant.ts":
/*!*****************************!*\
  !*** ./src/app.constant.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BITCOIN_LAST_MONTH_HISTORY_API = exports.BITCOIN_LAST_HOUR_HISTORY_API = exports.BITCOIN_LAST_YEAR_HISTORY_API = exports.BITCOIN_LAST_24_HOURS_HISTORY_API = exports.ENV_FILE_PATH = void 0;
exports.ENV_FILE_PATH = './.env';
const API_PATH = 'https://min-api.cryptocompare.com/data/v2';
exports.BITCOIN_LAST_24_HOURS_HISTORY_API = `${API_PATH}/histohour?fsym=BTC&tsym=USD&limit=24`;
exports.BITCOIN_LAST_YEAR_HISTORY_API = `${API_PATH}/histoday?fsym=BTC&tsym=USD&limit=365`;
exports.BITCOIN_LAST_HOUR_HISTORY_API = 'https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=1';
exports.BITCOIN_LAST_MONTH_HISTORY_API = `${API_PATH}/histoday?fsym=BTC&tsym=USD&limit=1`;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bitcoin_price_module_1 = __webpack_require__(/*! ./bitcoin-price/bitcoin-price.module */ "./src/bitcoin-price/bitcoin-price.module.ts");
const exchange_api_module_1 = __webpack_require__(/*! ./exchange-api/exchange-api.module */ "./src/exchange-api/exchange-api.module.ts");
const schedule_module_1 = __webpack_require__(/*! ./schedule/schedule.module */ "./src/schedule/schedule.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const env_schema_1 = __webpack_require__(/*! ./env.schema */ "./src/env.schema.ts");
const app_constant_1 = __webpack_require__(/*! ./app.constant */ "./src/app.constant.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./src/prisma/prisma.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                cache: true,
                isGlobal: true,
                envFilePath: app_constant_1.ENV_FILE_PATH,
                validationSchema: env_schema_1.default,
            }),
            prisma_module_1.PrismaModule,
            bitcoin_price_module_1.BitcoinPriceModule,
            exchange_api_module_1.ExchangeApiModule,
            schedule_module_1.MainScheduleModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);


/***/ }),

/***/ "./src/bitcoin-price/bitcoin-price.consts.ts":
/*!***************************************************!*\
  !*** ./src/bitcoin-price/bitcoin-price.consts.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BAD_REQUEST_MESSAGE = exports.DEFAULT_LIMIT = void 0;
exports.DEFAULT_LIMIT = 24;
exports.BAD_REQUEST_MESSAGE = 'Request cannot be processed';


/***/ }),

/***/ "./src/bitcoin-price/bitcoin-price.controller.ts":
/*!*******************************************************!*\
  !*** ./src/bitcoin-price/bitcoin-price.controller.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitcoinPriceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bitcoin_price_service_1 = __webpack_require__(/*! ./bitcoin-price.service */ "./src/bitcoin-price/bitcoin-price.service.ts");
const bitcoin_price_query_1 = __webpack_require__(/*! ./query/bitcoin-price.query */ "./src/bitcoin-price/query/bitcoin-price.query.ts");
let BitcoinPriceController = class BitcoinPriceController {
    constructor(bitcoinPriceService) {
        this.bitcoinPriceService = bitcoinPriceService;
    }
    findAll(query) {
        return this.bitcoinPriceService.findAll(query);
    }
    findByDay() {
        return this.bitcoinPriceService.findByDay();
    }
};
exports.BitcoinPriceController = BitcoinPriceController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof bitcoin_price_query_1.BitcoinPriceQuery !== "undefined" && bitcoin_price_query_1.BitcoinPriceQuery) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], BitcoinPriceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('day'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BitcoinPriceController.prototype, "findByDay", null);
exports.BitcoinPriceController = BitcoinPriceController = __decorate([
    (0, common_1.Controller)('bitcoin-price'),
    __metadata("design:paramtypes", [typeof (_a = typeof bitcoin_price_service_1.BitcoinPriceService !== "undefined" && bitcoin_price_service_1.BitcoinPriceService) === "function" ? _a : Object])
], BitcoinPriceController);


/***/ }),

/***/ "./src/bitcoin-price/bitcoin-price.module.ts":
/*!***************************************************!*\
  !*** ./src/bitcoin-price/bitcoin-price.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitcoinPriceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bitcoin_price_service_1 = __webpack_require__(/*! ./bitcoin-price.service */ "./src/bitcoin-price/bitcoin-price.service.ts");
const bitcoin_price_controller_1 = __webpack_require__(/*! ./bitcoin-price.controller */ "./src/bitcoin-price/bitcoin-price.controller.ts");
const bitcoin_price_repository_1 = __webpack_require__(/*! ./bitcoin-price.repository */ "./src/bitcoin-price/bitcoin-price.repository.ts");
let BitcoinPriceModule = class BitcoinPriceModule {
};
exports.BitcoinPriceModule = BitcoinPriceModule;
exports.BitcoinPriceModule = BitcoinPriceModule = __decorate([
    (0, common_1.Module)({
        controllers: [bitcoin_price_controller_1.BitcoinPriceController],
        providers: [bitcoin_price_service_1.BitcoinPriceService, bitcoin_price_repository_1.BitcoinPriceRepository],
        exports: [bitcoin_price_service_1.BitcoinPriceService],
    })
], BitcoinPriceModule);


/***/ }),

/***/ "./src/bitcoin-price/bitcoin-price.repository.ts":
/*!*******************************************************!*\
  !*** ./src/bitcoin-price/bitcoin-price.repository.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitcoinPriceRepository = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const bitcoin_price_consts_1 = __webpack_require__(/*! ./bitcoin-price.consts */ "./src/bitcoin-price/bitcoin-price.consts.ts");
let BitcoinPriceRepository = class BitcoinPriceRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByDate(query) {
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
    async findByHourDay() {
        return await this.prisma.dayPrice.findMany({
            orderBy: {
                timestamp: 'desc',
            },
            take: bitcoin_price_consts_1.DEFAULT_LIMIT,
        });
    }
    async createLastHourPrice(price) {
        return await this.prisma.dayPrice.create({
            data: { ...price.toObject() },
        });
    }
    async createLastDayPrice(price) {
        return await this.prisma.yearPrice.create({
            data: { ...price.toObject() },
        });
    }
    async findOne(timestamp) {
        return await this.prisma.dayPrice.findUnique({ where: { timestamp } });
    }
};
exports.BitcoinPriceRepository = BitcoinPriceRepository;
exports.BitcoinPriceRepository = BitcoinPriceRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], BitcoinPriceRepository);


/***/ }),

/***/ "./src/bitcoin-price/bitcoin-price.service.ts":
/*!****************************************************!*\
  !*** ./src/bitcoin-price/bitcoin-price.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitcoinPriceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bitcoin_price_repository_1 = __webpack_require__(/*! ./bitcoin-price.repository */ "./src/bitcoin-price/bitcoin-price.repository.ts");
const bitcoin_price_entity_1 = __webpack_require__(/*! ./entities/bitcoin-price.entity */ "./src/bitcoin-price/entities/bitcoin-price.entity.ts");
const bitcoin_price_consts_1 = __webpack_require__(/*! ./bitcoin-price.consts */ "./src/bitcoin-price/bitcoin-price.consts.ts");
const dayjs = __webpack_require__(/*! dayjs */ "dayjs");
__webpack_require__(/*! dayjs/locale/ru */ "dayjs/locale/ru");
dayjs.locale('ru');
let BitcoinPriceService = class BitcoinPriceService {
    constructor(bitcoinPriceRepository) {
        this.bitcoinPriceRepository = bitcoinPriceRepository;
    }
    async create(createBitcoinPriceDto) {
        try {
            const entity = new bitcoin_price_entity_1.BitcoinPriceEntity(createBitcoinPriceDto);
            const now = dayjs.unix(createBitcoinPriceDto.timestamp);
            const hour = now.get('hour');
            if (hour === bitcoin_price_consts_1.DEFAULT_LIMIT) {
                await this.bitcoinPriceRepository.createLastDayPrice(entity);
            }
            return await this.bitcoinPriceRepository.createLastHourPrice(entity);
        }
        catch (err) {
            throw new common_1.BadRequestException(bitcoin_price_consts_1.BAD_REQUEST_MESSAGE, err.message);
        }
    }
    async findAll(query) {
        try {
            return await this.bitcoinPriceRepository.findByDate(query);
        }
        catch (err) {
            throw new common_1.BadRequestException(bitcoin_price_consts_1.BAD_REQUEST_MESSAGE, err.message);
        }
    }
    async findByDay() {
        try {
            const result = await this.bitcoinPriceRepository.findByHourDay();
            return result.reverse();
        }
        catch (err) {
            throw new common_1.BadRequestException(bitcoin_price_consts_1.BAD_REQUEST_MESSAGE, err.message);
        }
    }
    async findByDate(timestamp) {
        try {
            return await this.bitcoinPriceRepository.findOne(timestamp);
        }
        catch {
            return null;
        }
    }
};
exports.BitcoinPriceService = BitcoinPriceService;
exports.BitcoinPriceService = BitcoinPriceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof bitcoin_price_repository_1.BitcoinPriceRepository !== "undefined" && bitcoin_price_repository_1.BitcoinPriceRepository) === "function" ? _a : Object])
], BitcoinPriceService);


/***/ }),

/***/ "./src/bitcoin-price/entities/bitcoin-price.entity.ts":
/*!************************************************************!*\
  !*** ./src/bitcoin-price/entities/bitcoin-price.entity.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitcoinPriceEntity = void 0;
class BitcoinPriceEntity {
    constructor(price) {
        this.fillEntity(price);
    }
    toObject() {
        return { ...this };
    }
    fillEntity(entity) {
        for (const key in entity) {
            this[key] = entity[key];
        }
    }
}
exports.BitcoinPriceEntity = BitcoinPriceEntity;


/***/ }),

/***/ "./src/bitcoin-price/query/bitcoin-price.query.ts":
/*!********************************************************!*\
  !*** ./src/bitcoin-price/query/bitcoin-price.query.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitcoinPriceQuery = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const bitcoin_price_consts_1 = __webpack_require__(/*! ../bitcoin-price.consts */ "./src/bitcoin-price/bitcoin-price.consts.ts");
class BitcoinPriceQuery {
    constructor() {
        this.limit = bitcoin_price_consts_1.DEFAULT_LIMIT;
    }
}
exports.BitcoinPriceQuery = BitcoinPriceQuery;
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], BitcoinPriceQuery.prototype, "start", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], BitcoinPriceQuery.prototype, "end", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BitcoinPriceQuery.prototype, "limit", void 0);


/***/ }),

/***/ "./src/env.schema.ts":
/*!***************************!*\
  !*** ./src/env.schema.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Joi = __webpack_require__(/*! joi */ "joi");
exports["default"] = Joi.object({
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_DB: Joi.string().required(),
    PGADMIN_DEFAULT_EMAIL: Joi.string().required(),
    PGADMIN_DEFAULT_PASSWORD: Joi.string().required(),
    DATABASE_URL: Joi.string().required(),
});


/***/ }),

/***/ "./src/exchange-api/exchange-api.consts.ts":
/*!*************************************************!*\
  !*** ./src/exchange-api/exchange-api.consts.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FAILED_TO_FETCH_MESSAGE = void 0;
exports.FAILED_TO_FETCH_MESSAGE = 'Ошибка при получении данных:';


/***/ }),

/***/ "./src/exchange-api/exchange-api.module.ts":
/*!*************************************************!*\
  !*** ./src/exchange-api/exchange-api.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeApiModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const exchange_api_service_1 = __webpack_require__(/*! ./exchange-api.service */ "./src/exchange-api/exchange-api.service.ts");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
let ExchangeApiModule = class ExchangeApiModule {
};
exports.ExchangeApiModule = ExchangeApiModule;
exports.ExchangeApiModule = ExchangeApiModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [exchange_api_service_1.ExchangeApiService],
        exports: [exchange_api_service_1.ExchangeApiService],
    })
], ExchangeApiModule);


/***/ }),

/***/ "./src/exchange-api/exchange-api.service.ts":
/*!**************************************************!*\
  !*** ./src/exchange-api/exchange-api.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExchangeApiService = void 0;
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const exchange_api_consts_1 = __webpack_require__(/*! ./exchange-api.consts */ "./src/exchange-api/exchange-api.consts.ts");
const app_constant_1 = __webpack_require__(/*! src/app.constant */ "./src/app.constant.ts");
let ExchangeApiService = class ExchangeApiService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getLastHour() {
        return (0, rxjs_1.lastValueFrom)(this.httpService.get(app_constant_1.BITCOIN_LAST_HOUR_HISTORY_API).pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((error) => {
            console.error(exchange_api_consts_1.FAILED_TO_FETCH_MESSAGE, error);
            return null;
        })));
    }
};
exports.ExchangeApiService = ExchangeApiService;
exports.ExchangeApiService = ExchangeApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], ExchangeApiService);


/***/ }),

/***/ "./src/prisma/prisma.module.ts":
/*!*************************************!*\
  !*** ./src/prisma/prisma.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./src/prisma/prisma.service.ts");
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);


/***/ }),

/***/ "./src/prisma/prisma.service.ts":
/*!**************************************!*\
  !*** ./src/prisma/prisma.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),

/***/ "./src/schedule/schedule.module.ts":
/*!*****************************************!*\
  !*** ./src/schedule/schedule.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainScheduleModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_service_1 = __webpack_require__(/*! ./schedule.service */ "./src/schedule/schedule.service.ts");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const exchange_api_module_1 = __webpack_require__(/*! src/exchange-api/exchange-api.module */ "./src/exchange-api/exchange-api.module.ts");
const bitcoin_price_module_1 = __webpack_require__(/*! src/bitcoin-price/bitcoin-price.module */ "./src/bitcoin-price/bitcoin-price.module.ts");
let MainScheduleModule = class MainScheduleModule {
};
exports.MainScheduleModule = MainScheduleModule;
exports.MainScheduleModule = MainScheduleModule = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot(), exchange_api_module_1.ExchangeApiModule, bitcoin_price_module_1.BitcoinPriceModule],
        providers: [schedule_service_1.ScheduleService],
    })
], MainScheduleModule);


/***/ }),

/***/ "./src/schedule/schedule.service.ts":
/*!******************************************!*\
  !*** ./src/schedule/schedule.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ScheduleService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScheduleService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const bitcoin_price_service_1 = __webpack_require__(/*! src/bitcoin-price/bitcoin-price.service */ "./src/bitcoin-price/bitcoin-price.service.ts");
const exchange_api_service_1 = __webpack_require__(/*! src/exchange-api/exchange-api.service */ "./src/exchange-api/exchange-api.service.ts");
const shedule_consts_1 = __webpack_require__(/*! ./shedule.consts */ "./src/schedule/shedule.consts.ts");
let ScheduleService = ScheduleService_1 = class ScheduleService {
    constructor(exchangeService, bitcoinPriceService) {
        this.exchangeService = exchangeService;
        this.bitcoinPriceService = bitcoinPriceService;
        this.logger = new common_1.Logger(ScheduleService_1.name);
    }
    async getEveryHour() {
        try {
            const data = await this.exchangeService.getLastHour();
            const price = data.Data.Data[1];
            if (!price)
                return;
            const existPrice = await this.bitcoinPriceService.findByDate(price.time);
            if (existPrice)
                return this.logger.log(shedule_consts_1.ENTRY_EXIST);
            await this.bitcoinPriceService.create({
                timestamp: price.time,
                close: price.close,
            });
            this.logger.log(shedule_consts_1.ENTRY_ADDED);
        }
        catch {
            throw new common_1.NotFoundException();
        }
    }
};
exports.ScheduleService = ScheduleService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScheduleService.prototype, "getEveryHour", null);
exports.ScheduleService = ScheduleService = ScheduleService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof exchange_api_service_1.ExchangeApiService !== "undefined" && exchange_api_service_1.ExchangeApiService) === "function" ? _a : Object, typeof (_b = typeof bitcoin_price_service_1.BitcoinPriceService !== "undefined" && bitcoin_price_service_1.BitcoinPriceService) === "function" ? _b : Object])
], ScheduleService);


/***/ }),

/***/ "./src/schedule/shedule.consts.ts":
/*!****************************************!*\
  !*** ./src/schedule/shedule.consts.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENTRY_EXIST = exports.ENTRY_ADDED = void 0;
exports.ENTRY_ADDED = 'New entry added.';
exports.ENTRY_EXIST = 'Entry already exists.';


/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/locale/ru":
/*!**********************************!*\
  !*** external "dayjs/locale/ru" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("dayjs/locale/ru");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    const port = process.env.PORT ?? 3001;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;
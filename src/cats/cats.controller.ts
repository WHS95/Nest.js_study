import { successInterceptor } from './../common/interceptors/success. interceptor';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(successInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  //dependency injection 의존성 주입
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  getAllcat() {
    // throw new HttpException('error', 401);
    console.log('hello Controller');
    return { cats: 'cats data' };
  }

  // cats/:id
  @Get(':id')
  //ParseIntPipe으로 인해 string 타입을 Number타입으로 변환가능
  //더불어, 유효성검사 까지 가능 :id에 Number 타입이 아닌경우 에러 발생
  getOnecat(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    console.log(typeof id);
    return 'get one cat api';
  }

  @Post()
  createCat() {
    return 'create cat api';
  }

  @Put(':id')
  updateCat() {
    return 'update cat api';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'patch cat api';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service api';
  }
}

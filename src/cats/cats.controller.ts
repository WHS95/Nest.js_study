import { HttpExceptionFilter } from './../http-exception.filter';
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
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  //dependency injection 의존성 주입
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllcat() {
    throw new HttpException('api error', 401);
    return 'get all cat api';
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

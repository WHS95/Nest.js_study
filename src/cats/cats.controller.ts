import { HttpExceptionFilter } from './../http-exception.filter';
import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
  getOnecat() {
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

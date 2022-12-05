import { CatsService } from './cats.service';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  //dependency injection 의존성 주입
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  getAllcat() {
    return 'all cat';
  }

  // cats/:id
  @Get(':id')
  getOnecat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'patch cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}

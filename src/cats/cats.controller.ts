import { successInterceptor } from './../common/interceptors/success. interceptor';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import {
  Controller,
  Get,
  Post,
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
  getCurrentCat() {
    return 'current Cat';
  }

  @Post()
  async signUp() {
    return 'signUp';
  }

  @Post('login')
  login() {
    return 'login';
  }

  @Post('logout')
  logout() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}

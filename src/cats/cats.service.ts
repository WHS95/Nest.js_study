import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCatService() {
    return 'hello cats';
  }
}

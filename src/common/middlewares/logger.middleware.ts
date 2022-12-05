import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

//nestjs의 logger클래스를 이용하여 logging 진행
//res응답할때 까지 의 값도 같이 logging 할 경우
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      this.logger.log(
        `${req.ip},${req.method},${res.statusCode}`,
        req.originalUrl,
      );
    });
    next();
  }
}

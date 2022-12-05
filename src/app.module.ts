import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(), //imports내에서 환경변수사용을 위해 작성
    MongooseModule.forRoot(process.env.MONGODB_URI), //MONGODB 연결
    CatsModule,
    UsersModule,
  ],
  //controllers에서는 prmongo --versionovider에서 주입받은것들만 사용이 가능하다.
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer) {
    //모든 라우터에 LoggerMiddleware 적용
    consumer.apply(LoggerMiddleware).forRoutes('*');
    //개발시 mongoose 쿼리가 나온다. 배포 후 false로 변환 필요
    mongoose.set('debug', this.isDev);
  }
}

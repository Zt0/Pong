import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(path.join(__dirname, '..', '..', 'socket-client/views'));
  app.setBaseViewsDir(path.join(__dirname, '..', '..', 'socket-client/views'));
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { AlertGateway } from './alert.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ChatGateway, AlertGateway],
})
export class AppModule {}

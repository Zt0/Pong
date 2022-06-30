import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { AlertGateway } from './alert.gateway';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private alertGateway: AlertGateway,
  ) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/index')
  @Render('index')
  getIndex() {
    return { message: 'Index Page' };
  }
  @Get('/pong')
  getDynamic(@Res() res: Response) {
    return res.render('pong');
  }

  @Post()
  @HttpCode(200)
  sendAlertToAll(@Body() dto: { message: string }) {
    this.alertGateway.sendToAll(dto.message);
    return dto;
  }
}

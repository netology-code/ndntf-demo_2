import {Controller, Get, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {DailyGuard} from "./daily.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(DailyGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
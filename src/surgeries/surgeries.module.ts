import { Module } from '@nestjs/common';
import { SurgeriesService } from './surgeries.service';
import { SurgeriesController } from './surgeries.controller';

@Module({
  providers: [SurgeriesService],
  controllers: [SurgeriesController]
})
export class SurgeriesModule {}

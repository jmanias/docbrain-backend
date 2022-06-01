import { Module } from '@nestjs/common';
import { ExaminationsService } from './examinations.service';
import { ExaminationsController } from './examinations.controller';

@Module({
  providers: [ExaminationsService],
  controllers: [ExaminationsController]
})
export class ExaminationsModule {}

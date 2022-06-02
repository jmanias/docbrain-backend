import { Module } from '@nestjs/common';
import { SurgeriesService } from './surgeries.service';
import { SurgeriesController } from './surgeries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Surgery, SurgerySchema } from './entities/surgery.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Surgery.name,
        schema: SurgerySchema,
      },
    ]),
  ],
  providers: [SurgeriesService],
  controllers: [SurgeriesController],
})
export class SurgeriesModule {}

import { Module } from '@nestjs/common';
import { SurgeriesService } from './surgeries.service';
import { SurgeriesController } from './surgeries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Surgery, SurgerySchema } from './entities/surgery.entity';
import { Patient, PatientSchema } from '../patients/entities/patient.entity';
import { PatientsModule } from '../patients/patients.module';

@Module({
  imports: [
    PatientsModule,
    MongooseModule.forFeature([
      {
        name: Surgery.name,
        schema: SurgerySchema,
      },
      {
        name: Patient.name,
        schema: PatientSchema,
      },
    ]),
  ],
  providers: [SurgeriesService],
  controllers: [SurgeriesController],
})
export class SurgeriesModule {}

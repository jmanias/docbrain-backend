import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './entities/appointment.entity';
import { Patient, PatientSchema } from '../patients/entities/patient.entity';
import { PatientsModule } from '../patients/patients.module';

@Module({
  imports: [
    PatientsModule,
    MongooseModule.forFeature([
      {
        name: Appointment.name,
        schema: AppointmentSchema,
      },
      {
        name: Patient.name,
        schema: PatientSchema,
      },
    ]),
  ],
  providers: [AppointmentsService],
  controllers: [AppointmentsController],
})
export class AppointmentsModule {}

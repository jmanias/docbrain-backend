import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { SurgeriesModule } from './surgeries/surgeries.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ExaminationsModule } from './examinations/examinations.module';
import { OptionsModule } from './options/options.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //ignoreEnvFile: true // production
    }),
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
    UsersModule,
    AuthModule,
    PatientsModule,
    SurgeriesModule,
    AppointmentsModule,
    ExaminationsModule,
    OptionsModule,
  ],
})
export class AppModule {}

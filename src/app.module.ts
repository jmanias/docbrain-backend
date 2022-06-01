import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';

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
  ],
})
export class AppModule {}

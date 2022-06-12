import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../../users/entities/user.entity';
import { Type } from 'class-transformer';
import { Patient } from '../../patients/entities/patient.entity';

@Schema({ timestamps: true })
export class Appointment extends Document {
  @Prop()
  type: string;

  @Prop()
  date: Date;

  @Prop()
  startTime: string;

  @Prop()
  notice: string;

  @Prop()
  duration: string;

  @Prop()
  reason: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: User.name,
  })
  @Type(() => User)
  user: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: Patient.name,
  })
  @Type(() => Patient)
  patient: mongoose.Schema.Types.ObjectId;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);

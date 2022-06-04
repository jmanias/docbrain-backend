import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
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
  patient: string;

  @Prop()
  duration: string;

  @Prop()
  reason: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Surgery extends Document {
  @Prop()
  type: string;

  @Prop()
  place: string;

  @Prop()
  date: Date;

  @Prop()
  time: string;

  @Prop()
  notice: string;

  @Prop()
  patient: string;
}

export const SurgerySchema = SchemaFactory.createForClass(Surgery);

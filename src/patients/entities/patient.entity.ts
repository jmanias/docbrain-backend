import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Patient extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  fathersName: string;

  @Prop()
  bornDate: Date;

  @Prop()
  gender: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  postCode: string;

  @Prop()
  insuranceType: string;

  @Prop({ unique: true })
  insuranceNumber: string;

  @Prop({ unique: true })
  phone: string;

  @Prop({ unique: true })
  mobilePhone: string;

  @Prop()
  email: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);

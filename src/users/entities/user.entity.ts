import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  fathersName: string;

  @Prop()
  birthdate: Date;

  @Prop()
  gender: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  postalCode: string;

  @Prop()
  insuranceType: string;

  @Prop()
  insuranceNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

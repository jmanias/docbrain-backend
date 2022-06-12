import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Options extends Document {
  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  postCode: string;
}

export const OptionSchema = SchemaFactory.createForClass(Options);

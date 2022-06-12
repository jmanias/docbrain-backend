import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MinLength } from 'class-validator';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  @MinLength(6, { message: 'Your Password should be at least 6 characters' })
  password: string;

  @Prop()
  role: string;

  @Prop()
  language: string;

  @Prop()
  active: boolean;

  @Prop()
  hash: string;

  @Prop()
  hashedRt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

import {
  IsDate,
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsOptional()
  @IsString()
  readonly fathersName: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  readonly bornDate: Date;

  @IsOptional()
  @IsString()
  readonly gender: string;

  @IsOptional()
  @IsString()
  readonly address: string;

  @IsOptional()
  @IsString()
  readonly city: string;

  @IsOptional()
  @IsString()
  readonly state: string;

  @IsOptional()
  @IsString()
  readonly postCode: string;

  @IsOptional()
  @IsString()
  readonly insuranceType: string;

  @IsOptional()
  @IsString()
  readonly insuranceNumber: string;

  @IsOptional()
  @IsPhoneNumber()
  readonly phone: string;

  @IsOptional()
  @IsMobilePhone()
  readonly mobilePhone: string;

  @IsOptional()
  @IsEmail()
  readonly email: string;
}

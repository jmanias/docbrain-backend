import { IsDateString, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly fathersName: string;

  @IsDateString()
  readonly birthdate: string;

  @IsString()
  readonly gender: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly postalCode: string;

  @IsString()
  readonly insuranceType: string;

  @IsString()
  readonly insuranceNumber: string;
}

import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAppointmentDto {
  @IsOptional()
  @IsString()
  readonly type: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly date: Date;

  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsOptional()
  @IsString()
  readonly notice: string;

  @IsNotEmpty()
  @IsString()
  readonly patient: string;

  @IsNotEmpty()
  @IsString()
  readonly duration: string;

  @IsOptional()
  @IsString()
  readonly reason: string;
}

import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSurgeryDto {
  @IsOptional()
  @IsString()
  readonly type: string;

  @IsOptional()
  @IsString()
  readonly place: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  readonly date: Date;

  @IsOptional()
  @IsString()
  time: string;

  @IsOptional()
  @IsString()
  readonly notice: string;

  @IsNotEmpty()
  @IsString()
  readonly patient: string;
}

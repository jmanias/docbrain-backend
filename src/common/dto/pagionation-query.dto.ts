import { IsOptional } from 'class-validator';

export class PagionationQueryDto {
  @IsOptional()
  limit: number;

  @IsOptional()
  offset: number;
}

import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DebiturStatus } from '../debitur-status.enum';

export class GetDebiturFiltersDto {
  @IsOptional()
  @IsEnum(DebiturStatus)
  status?: DebiturStatus;

  @IsOptional()
  @IsString()
  search?: string;
}

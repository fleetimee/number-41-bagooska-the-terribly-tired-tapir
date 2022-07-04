import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';
import { DebiturStatus } from '../debitur-status.enum';

export class GetDebiturFiltersDto {
  @ApiProperty({
    description: 'Debitur status',
    examples: [],
  })
  @IsOptional()
  @IsEnum(DebiturStatus)
  status?: DebiturStatus;

  @ApiProperty({
    description: 'Search nama dan alamat debitur',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({
    description: 'Search by NIK',
  })
  @IsOptional()
  @IsNumberString()
  nik?: number;
}

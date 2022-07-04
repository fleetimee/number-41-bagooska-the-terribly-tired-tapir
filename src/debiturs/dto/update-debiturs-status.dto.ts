import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { DebiturStatus } from '../debitur-status.enum';

export class UpdateDebiturStatusDto {
  @ApiProperty()
  @IsEnum(DebiturStatus)
  status: DebiturStatus;
}

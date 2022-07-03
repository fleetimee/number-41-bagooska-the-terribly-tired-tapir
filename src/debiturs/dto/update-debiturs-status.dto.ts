import { IsEnum } from 'class-validator';
import { DebiturStatus } from '../debitur-status.enum';

export class UpdateDebiturStatusDto {
  @IsEnum(DebiturStatus) status: DebiturStatus;
}

import { PartialType } from '@nestjs/swagger';
import { CreateDebiturDto } from './create-debitur.dto';

export class UpdateDebiturDto extends PartialType(CreateDebiturDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAsuransiDto } from './create-asuransi.dto';

export class UpdateAsuransiDto extends PartialType(CreateAsuransiDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAgunanLoDto } from './create-agunan_lo.dto';

export class UpdateAgunanLoDto extends PartialType(CreateAgunanLoDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAgunanDto } from './create-agunan.dto';

export class UpdateAgunanDto extends PartialType(CreateAgunanDto) {}

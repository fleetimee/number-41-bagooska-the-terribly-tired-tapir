import { PartialType } from '@nestjs/swagger';
import { CreateAgunanPeralatanDto } from './create-agunan_peralatan.dto';

export class UpdateAgunanPeralatanDto extends PartialType(CreateAgunanPeralatanDto) {}

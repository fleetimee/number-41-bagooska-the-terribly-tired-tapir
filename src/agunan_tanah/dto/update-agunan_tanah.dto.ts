import { PartialType } from '@nestjs/swagger';
import { CreateAgunanTanahDto } from './create-agunan_tanah.dto';

export class UpdateAgunanTanahDto extends PartialType(CreateAgunanTanahDto) {}

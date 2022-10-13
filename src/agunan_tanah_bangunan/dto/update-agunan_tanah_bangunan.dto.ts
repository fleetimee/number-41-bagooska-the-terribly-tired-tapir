import { PartialType } from '@nestjs/swagger';
import { CreateAgunanTanahBangunanDto } from './create-agunan_tanah_bangunan.dto';

export class UpdateAgunanTanahBangunanDto extends PartialType(CreateAgunanTanahBangunanDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAgunanLainnyaDto } from './create-agunan_lainnya.dto';

export class UpdateAgunanLainnyaDto extends PartialType(CreateAgunanLainnyaDto) {}

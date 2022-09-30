import { PartialType } from '@nestjs/swagger';
import { CreateAgunanKioDto } from './create-agunan_kio.dto';

export class UpdateAgunanKioDto extends PartialType(CreateAgunanKioDto) {}

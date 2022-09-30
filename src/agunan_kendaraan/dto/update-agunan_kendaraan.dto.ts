import { PartialType } from '@nestjs/swagger';
import { CreateAgunanKendaraanDto } from './create-agunan_kendaraan.dto';

export class UpdateAgunanKendaraanDto extends PartialType(CreateAgunanKendaraanDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAnalisaJenisUsahaDto } from './create-analisa_jenis_usaha.dto';

export class UpdateAnalisaJenisUsahaDto extends PartialType(CreateAnalisaJenisUsahaDto) {}

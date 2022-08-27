import { PartialType } from '@nestjs/swagger';
import { CreateAnalisaKeuanganDto } from './create-analisa_keuangan.dto';

export class UpdateAnalisaKeuanganDto extends PartialType(CreateAnalisaKeuanganDto) {}

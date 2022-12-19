import { PartialType } from '@nestjs/swagger';
import { CreatePengajuanDto } from './create-pengajuan.dto';

export class UpdatePengajuanDto extends PartialType(CreatePengajuanDto) {}

import { PartialType } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { JenisPengajuan } from '../enum/jenis-pengajuan.enum';
import { JenisPenggunaan } from '../enum/jenis-penggunaan.enum';
import { CreateFixedDto } from './create-fixed.dto';

export class UpdateFixedDto extends PartialType(CreateFixedDto) {
  @IsEnum(JenisPengajuan)
  jenis_pengajuan: JenisPengajuan;

  @IsEnum(JenisPenggunaan)
  jenis_penggunaan: JenisPenggunaan;
}

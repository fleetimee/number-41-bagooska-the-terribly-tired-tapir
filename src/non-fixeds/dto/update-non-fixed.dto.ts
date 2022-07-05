import { PartialType } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { JenisPengajuan } from 'src/fixeds/enum/jenis-pengajuan.enum';
import { JenisPenggunaan } from 'src/fixeds/enum/jenis-penggunaan.enum';
import { CreateFixedDto } from './create-non-fixed.dto';

export class UpdateFixedDto extends PartialType(CreateFixedDto) {
  @IsEnum(JenisPengajuan)
  jenis_pengajuan: JenisPengajuan;

  @IsEnum(JenisPenggunaan)
  jenis_penggunaan: JenisPenggunaan;
}

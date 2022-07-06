import { PartialType } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { JenisPengajuan } from 'src/fixeds/enum/jenis-pengajuan.enum';
import { JenisPenggunaan } from 'src/fixeds/enum/jenis-penggunaan.enum';
import { CreateNonFixedDto } from './create-non-fixed.dto';

export class UpdateNonFixedDto extends PartialType(CreateNonFixedDto) {
  @IsNotEmpty()
  @IsEnum(JenisPengajuan, {
    message: 'Jenis pengajuan tidak valid (BARU/ADENDUM/RESTRUK)',
  })
  jenis_pengajuan: JenisPengajuan;

  @IsNotEmpty()
  @IsEnum(JenisPenggunaan, {
    message: 'Jenis penggunaan tidak valid (MODAL_USAHA/INVESTASI/KONSUMSI)',
  })
  jenis_penggunaan: JenisPenggunaan;
}

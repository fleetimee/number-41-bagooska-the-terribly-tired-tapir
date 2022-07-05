import { IsEnum, IsNotEmpty, IsNumberString } from 'class-validator';
import { JenisPengajuan } from 'src/fixeds/enum/jenis-pengajuan.enum';
import { JenisPenggunaan } from 'src/fixeds/enum/jenis-penggunaan.enum';

export class CreateFixedDto {
  @IsNotEmpty()
  @IsNumberString()
  plafon_fasilitas: number;

  @IsEnum(JenisPengajuan)
  jenis_pengajuan: JenisPengajuan;

  @IsEnum(JenisPenggunaan)
  jenis_penggunaan: JenisPenggunaan;
}

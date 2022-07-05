import { JenisPenggunaan } from './../enum/jenis-penggunaan.enum';
import { IsEnum, IsNotEmpty, IsNumberString } from 'class-validator';
import { JenisPengajuan } from '../enum/jenis-pengajuan.enum';

export class CreateFixedDto {
  @IsNotEmpty()
  @IsNumberString()
  plafon_fasilitas: number;

  @IsEnum(JenisPengajuan)
  jenis_pengajuan: JenisPengajuan;

  @IsEnum(JenisPenggunaan)
  jenis_penggunaan: JenisPenggunaan;
}

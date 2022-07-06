import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
} from 'class-validator';
import { JenisPengajuan } from 'src/fixeds/enum/jenis-pengajuan.enum';
import { JenisPenggunaan } from 'src/fixeds/enum/jenis-penggunaan.enum';

export class CreateNonFixedDto {
  // Data Fasilitas
  @IsNotEmpty({ message: 'Plafon fasilitas tidak boleh kosong' })
  @IsNumberString({ message: 'Plafon fasilitas harus berupa angka' })
  plafon_fasilitas: number;

  @IsNotEmpty({ message: 'Jenis pengajuan tidak boleh kosong' })
  @IsEnum(JenisPengajuan, {
    message: 'Jenis pengajuan tidak valid (BARU/ADENDUM/RESTRUK)',
  })
  jenis_pengajuan: JenisPengajuan;

  @IsNotEmpty({
    message:
      'Jenis penggunaan tidak boleh kosong (MODAL_USAHA/INVESTASI/KONSUMSI)',
  })
  @IsEnum(JenisPenggunaan)
  jenis_penggunaan: JenisPenggunaan;

  @IsNotEmpty({ message: 'Tujuan penggunaan tidak boleh kosong' })
  tujuan_penggunaan: string;

  @IsNotEmpty({ message: 'Jangka waktu tidak boleh kosong' })
  jangka_waktu: string;

  // Riwayat data kredit
  @IsNumberString({ message: 'No rekening harus berupa angka' })
  @IsOptional()
  no_rekening: number;

  @IsNumberString({ message: 'Plafon kredit harus berupa angka' })
  @IsOptional()
  plafon_kredit: number;

  @IsOptional()
  tanggal_mulai_kredit: string;

  @IsOptional()
  jangka_waktu_kredit: string;

  // Relation
  @IsNotEmpty({ message: 'DebiturID tidak boleh kosong' })
  debitur: string;
}

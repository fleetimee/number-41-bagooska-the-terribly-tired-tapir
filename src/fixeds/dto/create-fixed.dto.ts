import { JenisPenggunaan } from './../enum/jenis-penggunaan.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
} from 'class-validator';
import { JenisPengajuan } from '../enum/jenis-pengajuan.enum';

/* This class is used to create a new fixed loan */
export class CreateFixedDto {
  // Data Fasilitas
  @IsNotEmpty({ message: 'Jenis pengajuan tidak boleh kosong' })
  @IsNumberString({ message: 'Jenis pengajuan harus berupa angka' })
  plafon_fasilitas: number;

  @IsNotEmpty({ message: 'Jenis penggunaan tidak boleh kosong' })
  @IsEnum(JenisPengajuan, {
    message: 'Jenis pengajuan tidak valid (BARU/ADENDUM/RESTRUK)',
  })
  jenis_pengajuan: JenisPengajuan;

  @IsNotEmpty({ message: 'Tujuan penggunaan tidak boleh kosong' })
  @IsEnum(JenisPenggunaan, {
    message: 'Tujuan penggunaan tidak valid (MODAL_KERJA/INVESTASI/KONSUMSI)',
  })
  jenis_penggunaan: JenisPenggunaan;

  @IsNotEmpty({ message: 'Tujuan penggunaan tidak boleh kosong' })
  jangka_waktu: string;

  @IsNotEmpty({ message: 'Tujuan penggunaan tidak boleh kosong' })
  tujuan_penggunaan: string;

  // Data Penghasilan
  @IsNumberString({ message: 'Penghasilan pemohon harus berupa angka' })
  @IsNotEmpty({ message: 'Penghasilan pemohon tidak boleh kosong' })
  penghasilan_pemohon: number;

  @IsNumberString({ message: 'Potongan gaji harus berupa angka' })
  @IsNotEmpty({ message: 'Potongan gaji tidak boleh kosong' })
  potongan_gaji: number;

  @IsNumberString({ message: 'Sisa penghasilan harus berupa angka' })
  @IsNotEmpty({ message: 'Sisa penghasilan tidak boleh kosong' })
  sisa_penghasilan: number;

  @IsNotEmpty({ message: 'Nama pejabat penanggung jawab tidak boleh kosong' })
  nama_pejabat_penanggung_jawab: string;

  @IsNotEmpty({
    message: 'Jabatan pejabat penanggung jawab tidak boleh kosong',
  })
  jabatan_pejabat_penanggung_jawab: string;

  @IsNotEmpty({ message: 'Nama pejabat pemotong gaji tidak boleh kosong' })
  nama_pejabat_pemotong_gaji: string;

  @IsNotEmpty({ message: 'Jabatan pejabat pemotong gaji tidak boleh kosong' })
  jabatan_pejabat_pemotong_gaji: string;

  // Riwayat Data Kredit
  @IsNumberString({ message: 'Nomor rekening harus berupa angka' })
  @IsOptional()
  no_rekening: number;

  @IsNumberString({ message: 'Plafon kredit harus berupa angka' })
  @IsOptional()
  plafon_kredit: number;

  @IsOptional()
  tanggal_mulai_kredit: string;

  @IsOptional()
  jangka_waktu_kredit: string;

  @IsNumberString({ message: 'Debitur harus berupa angka' })
  @IsNotEmpty({ message: 'Debitur tidak boleh kosong' })
  debitur: number;
}

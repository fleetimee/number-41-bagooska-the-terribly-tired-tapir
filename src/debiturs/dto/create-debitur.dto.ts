import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class CreateDebiturDto {
  /*  Data pribadi */

  @IsNumberString({ message: 'NIK harus berupa angka' })
  @IsNotEmpty({ message: 'NIK tidak boleh kosong' })
  nik: number;

  @IsNotEmpty({ message: 'Nama debitur tidak boleh kosong' })
  nama_debitur: string;

  @IsNotEmpty({ message: 'Alamat tidak boleh kosong' })
  alamat: string;

  @IsNotEmpty({ message: 'Tempat lahir tidak boleh kosong' })
  tempat_lahir: string;

  @IsDateString({ message: 'Tanggal lahir harus berupa tanggal' })
  @IsNotEmpty({ message: 'Tanggal lahir tidak boleh kosong' })
  tanggal_lahir: string;

  @IsNotEmpty({ message: 'Pekerjaan tidak boleh kosong' })
  pekerjaan: string;

  @IsNotEmpty({ message: 'Instansi tidak boleh kosong' })
  instansi: string;

  @IsNotEmpty({ message: 'Agama tidak boleh kosong' })
  agama: string;

  @IsNotEmpty({ message: 'Jenis kelamin tidak boleh kosong' })
  gender: string;

  @IsNotEmpty({ message: 'No telp tidak boleh kosong' })
  no_telp: string;

  @IsNotEmpty({ message: 'No seluler tidak boleh kosong' })
  no_seluler: string;

  @IsNotEmpty({ message: 'Email harus diisi' })
  @IsEmail({ message: 'Email tidak valid' })
  email: string;

  @IsNotEmpty({ message: 'Nama ibu tidak boleh kosong' })
  nama_ibu: string;
  /* End of data pribadi */

  /* Data status perkawinan */
  @IsOptional()
  relationship: string;

  @IsOptional()
  nama_pasangan: string;

  @IsOptional()
  pekerjaan_pasangan: string;

  @IsOptional()
  tgl_lahir_pasangan: string;

  @IsOptional()
  tempat_lahir_pasangan: string;

  @IsOptional()
  @IsNumber()
  nik_pasangan: number;
  /* End of status perkawinan */

  /* Data finansial debitur */

  @IsNotEmpty({ message: 'Total income tidak boleh kosong' })
  total_income: string;

  @IsNotEmpty({ message: 'Bidang usaha tidak boleh kosong' })
  bidang_usaha: string;

  @IsNumberString({ message: 'Jumlah tanggungan harus berupa angka' })
  @IsNotEmpty({ message: 'Jumlah tangunggan tidak boleh kosong' })
  jumlah_tanggungan: number;
  /* End of data finansial debitur */

  /* Data lokasi debitur */

  @IsNotEmpty({ message: 'Provinsi tidak boleh kosong' })
  provinsi: string;

  @IsNotEmpty({ message: 'Kabupaten tidak boleh kosong' })
  kabupaten: string;

  @IsNotEmpty({ message: 'Kecamatan tidak boleh kosong' })
  kecamatan: string;

  @IsNotEmpty({ message: 'Kelurahan tidak boleh kosong' })
  kelurahan: string;

  @IsNumberString()
  @IsNotEmpty({ message: 'RT tidak boleh kosong' })
  rt: number;

  @IsNumberString({ message: 'RW harus berupa angka' })
  @IsNotEmpty({ message: 'RW tidak boleh kosong' })
  rw: number;

  @IsNumberString({ message: 'Kode pos harus berupa angka' })
  @IsNotEmpty({ message: 'Kode pos tidak boleh kosong' })
  kode_pos: number;
  /* End of data lokasi debitur */
}

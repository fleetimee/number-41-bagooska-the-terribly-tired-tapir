import { JenisPenggunaan } from './../enum/jenis-penggunaan.enum';
import { JenisPengajuan } from './../enum/jenis-pengajuan.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Debitur } from 'src/debiturs/entities/debitur.entity';

@Entity()
export class Fixed {
  @PrimaryGeneratedColumn()
  id: string;

  // Nama Debitur dan Nomor Debitur di
  // ambil dari relasi dengan Debitur

  /* Data fasilitas */
  @Column()
  jenis_pengajuan: JenisPengajuan;

  @Column('bigint')
  plafon_fasilitas: number;

  @Column({ nullable: true })
  jenis_penggunaan: JenisPenggunaan;

  @Column()
  tujuan_penggunaan: string;

  @Column()
  jangka_waktu: string;

  /* Data penghasilan */
  @Column('bigint')
  penghasilan_pemohon: number;

  @Column('bigint')
  potongan_gaji: number;

  @Column('bigint')
  sisa_penghasilan: number;

  @Column()
  nama_pejabat_penanggung_jawab: string;

  @Column()
  jabatan_pejabat_penanggung_jawab: string;

  @Column()
  nama_pejabat_pemotong_gaji: string;

  @Column()
  jabatan_pejabat_pemotong_gaji: string;

  // Riwayat data kredit
  @Column('bigint')
  no_rekening: number;

  @Column('bigint')
  plafon_kredit: number;

  @Column('date')
  tanggal_mulai_kredit: string;

  @Column()
  jangka_waktu_kredit: string;

  // Relationship
  @ManyToOne(() => Debitur, (debitur) => debitur.fixed)
  debitur: Debitur;
}

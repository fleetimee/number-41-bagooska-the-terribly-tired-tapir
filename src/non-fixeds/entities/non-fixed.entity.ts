import { Debitur } from './../../debiturs/entities/debitur.entity';
import { JenisPengajuan } from 'src/fixeds/enum/jenis-pengajuan.enum';
import { JenisPenggunaan } from 'src/fixeds/enum/jenis-penggunaan.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NonFixed {
  @PrimaryGeneratedColumn()
  id: string;

  /* Data fasilitas */
  @Column()
  jenis_pengajuan: JenisPengajuan;

  @Column('bigint')
  plafon_fasilitas: number;

  @Column()
  jenis_penggunaan: JenisPenggunaan;

  @Column()
  tujuan_penggunaan: string;

  @Column()
  jangka_waktu: string;

  // Riwayat data kredit
  @Column('bigint')
  no_rekening: number;

  @Column('bigint')
  plafon_kredit: number;

  @Column('date')
  tanggal_mulai_kredit: string;

  @Column()
  jangka_waktu_kredit: string;

  // Relation
  @ManyToOne(() => Debitur, (debitur) => debitur.nonfixed)
  debitur: Debitur;
}

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
  @Column('bigint', { nullable: true })
  no_rekening: number;

  @Column('bigint', { nullable: true })
  plafon_kredit: number;

  @Column('date', { nullable: true })
  tanggal_mulai_kredit: string;

  @Column({ nullable: true })
  jangka_waktu_kredit: string;

  // Relation
  @ManyToOne(() => Debitur, (debitur) => debitur.nonfixed)
  debitur: Debitur;
}

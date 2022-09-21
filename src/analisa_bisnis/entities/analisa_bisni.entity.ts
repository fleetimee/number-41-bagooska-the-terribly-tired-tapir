import { Debitur } from 'src/debiturs/entities/debitur.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AnalisaBisni {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  nilai_omzet: number;

  @Column()
  keterangan_omzet: string;

  @Column('int')
  nilai_harga_bersaing: number;

  @Column()
  keterangan_harga_bersaing: string;

  @Column('int')
  nilai_persaingan: number;

  @Column()
  keterangan_persaingan: string;

  @Column('int')
  nilai_lokasi_usaha: number;

  @Column()
  keterangan_lokasi_usaha: string;

  @Column('int')
  nilai_produktivitas: number;

  @Column()
  keterangan_produktivitas: string;

  @Column('int')
  nilai_kualitas: number;

  @Column()
  keterangan_kualitas: string;

  @Column('text')
  deskripsi_bisnis: string;

  @Column('int')
  hasil_crr_bisnis: number;

  @OneToOne(() => Debitur, (debitur) => debitur, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  @JoinColumn()
  debitur: Debitur;
}

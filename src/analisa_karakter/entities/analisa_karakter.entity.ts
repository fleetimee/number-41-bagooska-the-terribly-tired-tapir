import { Debitur } from './../../debiturs/entities/debitur.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AnalisaKarakter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  nilai_umur: number;

  @Column('numeric', { precision: 5, scale: 1 })
  score_umur: number;

  @Column('numeric', { precision: 5, scale: 1 })
  crr_umur: number;

  @Column('numeric', { precision: 5, scale: 1 })
  score_pendidikan: number;

  @Column('numeric', { precision: 5, scale: 1 })
  crr_pendidikan: number;

  @Column('int')
  nilai_lamanya_berusaha: number;

  @Column('numeric', { precision: 5, scale: 1 })
  score_lamanya_berusaha: number;

  @Column('numeric', { precision: 5, scale: 1 })
  crr_lamanya_berusaha: number;

  @Column('numeric', { precision: 5, scale: 1 })
  score_ulet: number;

  @Column()
  keterangan_ulet: string;

  @Column('numeric', { precision: 5, scale: 1 })
  crr_ulet: number;

  @Column('numeric', { precision: 5, scale: 1 })
  score_kaku: number;

  @Column()
  keterangan_kaku: string;

  @Column('numeric', { precision: 5, scale: 1 })
  crr_kaku: number;

  @Column('numeric', { precision: 5, scale: 1 })
  score_kreatif: number;

  @Column()
  keterangan_kreatif: string;

  @Column('numeric', { precision: 5, scale: 1 })
  crr_kreatif: number;

  @Column('numeric', { precision: 5, scale: 1 })
  score_kejujuran: number;

  @Column()
  keterangan_kejujuran: string;

  @Column('numeric', { precision: 5, scale: 1 })
  crr_kejujuran: number;

  @Column('text')
  deskripsi_karakter: string;

  @Column('numeric', { precision: 5, scale: 1 })
  total_crr_karakter: number;

  @OneToOne(() => Debitur, (debitur) => debitur, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  @JoinColumn()
  debitur: Debitur;
}

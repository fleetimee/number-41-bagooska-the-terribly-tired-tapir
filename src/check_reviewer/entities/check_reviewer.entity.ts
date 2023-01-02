import { Pengajuan } from 'src/pengajuan/entities/pengajuan.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CheckReviewer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  is_keuangan_approved: boolean;

  @Column()
  is_karakter_approved: boolean;

  @Column()
  is_agunan_approved: boolean;

  @Column()
  is_bisnis_approved: boolean;

  @Column()
  is_jenis_usaha_approved: boolean;

  @OneToOne(() => Pengajuan, (pengajuan) => pengajuan, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  pengajuan: Pengajuan;

  @Column()
  pengajuanId: string;
}

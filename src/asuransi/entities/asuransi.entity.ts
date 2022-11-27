import { Debitur } from 'src/debiturs/entities/debitur.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Asuransi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nama_perusahaan: string;

  @Column('numeric')
  premi: number;

  @Column('bigint')
  total_asuransi: number;

  @OneToOne(() => Debitur, (debitur) => debitur, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  @JoinColumn()
  debitur: Debitur;

  @Column()
  debiturId: number;
}

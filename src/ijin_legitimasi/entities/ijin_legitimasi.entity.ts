import { Debitur } from 'src/debiturs/entities/debitur.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class IjinLegitimasi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jenis_ijin: string;

  @Column()
  keterangan_ijin: string;

  @OneToOne(() => Debitur, (debitur) => debitur, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  @JoinColumn()
  debitur: Debitur;

  @Column()
  debiturId: number;
}

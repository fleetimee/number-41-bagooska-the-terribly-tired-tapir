import { Debitur } from 'src/debiturs/entities/debitur.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AnalisaAgunan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint')
  total_agunan: number;

  @Column('numeric', { precision: 5, scale: 1 })
  total_crr_agunan: number;

  @Column('numeric', { precision: 5, scale: 2 })
  ratio_agunan: string;

  // Relationship

  @OneToOne(() => Debitur, (debitur) => debitur, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  debitur: Debitur;

  @Column()
  debiturId: number;
}

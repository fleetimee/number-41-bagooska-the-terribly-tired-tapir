import { Debitur } from './../../debiturs/entities/debitur.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Upload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  keterangan: string;

  @Column()
  file: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @ManyToOne(() => Debitur, (debitur) => debitur.upload)
  debitur: Debitur;

  @Column()
  debiturId: number;
}

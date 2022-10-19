import { Debitur } from './../../debiturs/entities/debitur.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SyaratLain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  keterangan: string;

  @ManyToOne(() => Debitur, (debitur) => debitur.syaratLain)
  debitur: Debitur;

  @Column()
  debiturId: number;
}

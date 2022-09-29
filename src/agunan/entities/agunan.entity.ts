import { Debitur } from 'src/debiturs/entities/debitur.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Agunan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  kode_agunan: number;

  @Column()
  jenis_agunan: string;

  // @OneToOne(
  //   () => KeteranganAgunan,
  //   (keteranganAgunan) => keteranganAgunan.agunan,
  //   {
  //     onDelete: 'CASCADE',
  //   },
  // )
  // keteranganAgunan: KeteranganAgunan;

  @ManyToMany(() => Debitur, (debitur) => debitur.agunan)
  debitur: Debitur[];
}

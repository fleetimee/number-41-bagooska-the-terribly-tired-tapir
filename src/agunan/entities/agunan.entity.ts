import { AgunanKendaraan } from './../../agunan_kendaraan/entities/agunan_kendaraan.entity';
import { AgunanTanah } from './../../agunan_tanah/entities/agunan_tanah.entity';
import { Debitur } from 'src/debiturs/entities/debitur.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Agunan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  kode_agunan: number;

  @Column()
  jenis_agunan: string;

  @Column('bool')
  is_tanah: boolean;

  @Column('bool')
  is_los: boolean;

  @Column('bool')
  is_kendaraan: boolean;

  @OneToMany(() => AgunanTanah, (agunanTanah) => agunanTanah.agunan, {
    onDelete: 'CASCADE',
  })
  form_tanah: AgunanTanah[];

  @OneToMany(
    () => AgunanKendaraan,
    (agunanKendaraan) => agunanKendaraan.agunan,
    {
      onDelete: 'CASCADE',
    },
  )
  form_kendaraan: AgunanKendaraan[];

  @ManyToOne(() => Debitur, (debitur) => debitur.agunan)
  debitur: Debitur;

  @Column()
  debiturId: number;
}

import { AgunanTanahBangunan } from './../../agunan_tanah_bangunan/entities/agunan_tanah_bangunan.entity';
import { AgunanLainnya } from './../../agunan_lainnya/entities/agunan_lainnya.entity';
import { AgunanCash } from './../../agunan_cash/entities/agunan_cash.entity';
import { AgunanPeralatan } from './../../agunan_peralatan/entities/agunan_peralatan.entity';
import { AgunanLo } from './../../agunan_los/entities/agunan_lo.entity';
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

  /* 
   Switch boolean untuk multi choice agunan
   supaya user bisa memilih banyak agunan
  */
  @Column('bool')
  is_tanah: boolean;

  @Column('bool')
  is_los: boolean;

  @Column('bool')
  is_kendaraan: boolean;

  /* 
    Ini adalah Relasi dengan form form agunan berbgai jenis'nya
    yang terdiri dari :

    - Agunan Tanah
    - Agunan Tanah & Bangunan
    - Agunan Kendaraan
    - Agunan Peralatan
    - Agunan Los
    - Agunan Cash
    - Agunan lainnya
  */
  @OneToMany(() => AgunanTanah, (agunanTanah) => agunanTanah.agunan, {
    onDelete: 'CASCADE',
  })
  form_tanah: AgunanTanah[];

  @OneToMany(
    () => AgunanTanahBangunan,
    (agunanTanahBangunan) => agunanTanahBangunan.agunan,
    {
      onDelete: 'CASCADE',
    },
  )
  form_tanah_bangunan: AgunanTanahBangunan[];

  @OneToMany(
    () => AgunanKendaraan,
    (agunanKendaraan) => agunanKendaraan.agunan,
    {
      onDelete: 'CASCADE',
    },
  )
  form_kendaraan: AgunanKendaraan[];

  @OneToMany(
    () => AgunanPeralatan,
    (agunanPeralatan) => agunanPeralatan.agunan,
    {
      onDelete: 'CASCADE',
    },
  )
  form_peralatan: AgunanPeralatan[];

  @OneToMany(() => AgunanCash, (agunanCash) => agunanCash.agunan, {
    onDelete: 'CASCADE',
  })
  form_cash: AgunanCash[];

  @OneToMany(() => AgunanLo, (agunanLos) => agunanLos.agunan, {
    onDelete: 'CASCADE',
  })
  form_los: AgunanLo[];

  @OneToMany(() => AgunanLainnya, (agunanLainnya) => agunanLainnya.agunan, {
    onDelete: 'CASCADE',
  })
  form_lainnya: AgunanLainnya[];

  /*
    Relasi dengan debitur yang memiliki agunan
  */
  @ManyToOne(() => Debitur, (debitur) => debitur.agunan)
  debitur: Debitur;

  @Column()
  debiturId: number;
}

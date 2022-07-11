import { Fixed } from './../../fixeds/entities/fixed.entity';
import { NonFixed } from './../../non-fixeds/entities/non-fixed.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

/* It's a decorator that tells TypeORM that this class is an entity. */
@Entity()
/* It's a class that represents a Debitur entity. */
export class Debitur {
  /* It's a decorator that tells TypeORM that this column is a primary column and it uses uuid for its
value generation strategy. */
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: string;

  @Generated('uuid')
  @Column({ unique: true })
  no_debitur: string;

  @Column('bigint')
  nik: number;

  @Column()
  nama_debitur: string;

  @Column()
  alamat: string;

  @Column()
  tempat_lahir: string;

  @Column('date')
  tanggal_lahir: string;

  @Column()
  pekerjaan: string;

  @Column()
  instansi: string;

  @Column()
  agama: string;

  @Column()
  gender: string;

  @Column()
  no_telp: string;

  @Column()
  no_seluler: string;

  @Column()
  email: string;

  @Column()
  nama_ibu: string;
  /* End of data pribadi */

  /* Data status perkawinan */
  @Column({ nullable: true })
  relationship: string;

  @Column({ nullable: true })
  nama_pasangan: string;

  @Column({ nullable: true })
  pekerjaan_pasangan: string;

  @Column('date', { nullable: true })
  tgl_lahir_pasangan: string;

  @Column({ nullable: true })
  tempat_lahir_pasangan: string;

  @Column({ nullable: true })
  nik_pasangan: number;
  /* End of status perkawinan */

  /* Data finansial debitur */
  @Column()
  total_income: string;

  @Column()
  bidang_usaha: string;

  @Column()
  jumlah_tanggungan: number;
  /* End of data finansial debitur */

  /* Data lokasi debitur */
  @Column()
  provinsi: string;

  @Column()
  kabupaten: string;

  @Column()
  kecamatan: string;

  @Column()
  kelurahan: string;

  @Column('int')
  rt: number;

  @Column('int')
  rw: number;

  @Column('int')
  kode_pos: number;
  /* End of data lokasi debitur */

  // Relation
  @OneToMany(() => NonFixed, (nonfixed) => nonfixed.debitur, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  nonfixed: NonFixed[];

  @OneToMany(() => Fixed, (fixed) => fixed.debitur, {
    onDelete: 'CASCADE',
  })
  fixed: Fixed[];
}

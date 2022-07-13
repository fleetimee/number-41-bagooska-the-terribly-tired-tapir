import { Submission } from './../../submissions/entities/submission.entity';
import { User } from 'src/users/entities/user.entity';
import { Debitur } from './../../debiturs/entities/debitur.entity';
import { JenisPengajuan } from 'src/fixeds/enum/jenis-pengajuan.enum';
import { JenisPenggunaan } from 'src/fixeds/enum/jenis-penggunaan.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class NonFixed {
  @PrimaryGeneratedColumn()
  id: string;

  /* Data fasilitas */
  @Column({
    type: 'enum',
    enum: JenisPengajuan,
    default: JenisPengajuan.BARU,
  })
  jenis_pengajuan: JenisPengajuan;

  @Column('bigint')
  plafon_fasilitas: number;

  @Column({
    type: 'enum',
    enum: JenisPenggunaan,
  })
  jenis_penggunaan: JenisPenggunaan;

  @Column()
  tujuan_penggunaan: string;

  @Column()
  jangka_waktu: string;

  // Riwayat data kredit
  @Column('bigint', { nullable: true })
  no_rekening: number;

  @Column('bigint', { nullable: true })
  plafon_kredit: number;

  @Column('date', { nullable: true })
  tanggal_mulai_kredit: string;

  @Column({ nullable: true })
  jangka_waktu_kredit: string;

  // Status
  @Column({ default: false })
  is_approved: boolean;

  // Relation
  @ManyToOne(() => Debitur, (debitur) => debitur.nonfixed, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  debitur: Debitur;

  @ManyToOne(() => User, (user) => user, { nullable: false })
  createdBy: User;

  @OneToOne(() => User, (user) => user, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  @ManyToMany(() => Submission, (submission) => submission.nonfixed)
  submission: Submission[];
}

// // Date now
// @Column('date', { default: () => 'CURRENT_DATE' })
// tanggal_pengajuan: string;

// Generate no pengajuan
/* A column definition. */
// @Column('varchar', { length: 10, nullable: true })
// no_pengajuan: string;

/* A hook that is called before the entity is inserted into the database. */
// @BeforeInsert()
// generateNoPengajuan() {
//   const nanoid = customAlphabet('1234567890', 10);
//   this.no_pengajuan = nanoid();
// }

// @Column('varchar', { nullable: true })
// nama_analis: string;

// @BeforeInsert()
// generateNamaAnalis() {
//   this.nama_analis = faker.name.findName();
// }

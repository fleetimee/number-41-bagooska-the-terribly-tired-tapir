import { JenisPenggunaan } from './../enum/jenis-penggunaan.enum';
import { JenisPengajuan } from './../enum/jenis-pengajuan.enum';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Debitur } from 'src/debiturs/entities/debitur.entity';
import { User } from 'src/users/entities/user.entity';
import { Submission } from 'src/submissions/entities/submission.entity';

@Entity()
export class Fixed {
  @PrimaryGeneratedColumn()
  id: string;

  // Nama Debitur dan Nomor Debitur di
  // ambil dari relasi dengan Debitur

  /* Data fasilitas */
  @Column()
  jenis_pengajuan: JenisPengajuan;

  @Column('bigint')
  plafon_fasilitas: number;

  @Column({ nullable: true })
  jenis_penggunaan: JenisPenggunaan;

  @Column()
  tujuan_penggunaan: string;

  @Column()
  jangka_waktu: string;

  /* Data penghasilan */
  @Column('bigint')
  penghasilan_pemohon: number;

  @Column('bigint')
  potongan_gaji: number;

  @Column('bigint')
  sisa_penghasilan: number;

  @Column()
  nama_pejabat_penanggung_jawab: string;

  @Column()
  jabatan_pejabat_penanggung_jawab: string;

  @Column()
  nama_pejabat_pemotong_gaji: string;

  @Column()
  jabatan_pejabat_pemotong_gaji: string;

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

  // Date now
  // @Column('date', { default: () => 'CURRENT_DATE' })
  // tanggal_pengajuan: string;

  // Generate nomer pengajuan
  // @Column('varchar', { default: () => `'${nanoid()}'` })
  // no_pengajuan: string;

  /* A column definition. */
  // @Column('varchar', { length: 10, nullable: true })
  // no_pengajuan: string;

  /* A hook that is called before the entity is inserted into the database. */
  // @BeforeInsert()
  // generateNoPengajuan() {
  //   const nanoid = customAlphabet('1234567890', 10);
  //   this.no_pengajuan = nanoid();
  // }

  // Relationship
  @ManyToOne(() => Debitur, (debitur) => debitur.fixed, {
    onDelete: 'CASCADE',
  })
  debitur: Debitur;

  @ManyToOne(() => User, (user) => user, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  createdBy: User;

  @OneToOne(() => User, (user) => user, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  @ManyToMany(() => Submission, (submission) => submission.fixed)
  submission: Submission[];
}

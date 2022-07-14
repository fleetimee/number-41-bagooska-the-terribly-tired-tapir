import { Submission } from 'src/submissions/entities/submission.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Collateral {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  barang_agunan: string;

  @Column()
  asuransi: string;

  @Column('bigint')
  nilai_agunan: number;

  @Column()
  bukti_agunan: string;

  @Column()
  ijin_milik: string;

  @Column('text')
  deskripsi_agunan: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // * Relation fields

  @ManyToOne(() => User, (user) => user, { nullable: false })
  createdBy: User;

  @OneToOne(() => User, (user) => user, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  // @ManyToOne(() => Submission, (submission) => submission.collateral, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  //   nullable: false,
  // })
  // submission: Submission;

  @OneToMany(() => Submission, (submission) => submission.collateral)
  submission: Submission[];
}

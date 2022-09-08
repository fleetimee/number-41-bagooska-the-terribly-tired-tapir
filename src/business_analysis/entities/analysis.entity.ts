import { Submission } from 'src/submissions/entities/submission.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Analysis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  omset_penjualan: string;

  @Column()
  harga_bersaing: string;

  @Column()
  persaingan: string;

  @Column()
  lokasi: string;

  @Column()
  kualitas: string;

  @Column('text')
  deskripsi_bisnis: string;

  // Relation

  @ManyToOne(() => User, (user) => user, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  createdBy: User;

  @OneToOne(() => User, (user) => user, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  @OneToMany(() => Submission, (submission) => submission.business_analysis)
  submission: Submission[];
}

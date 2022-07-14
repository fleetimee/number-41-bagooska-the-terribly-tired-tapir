import { Max, Min } from 'class-validator';
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
export class CharacterAnalysis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  @Min(1)
  @Max(95)
  ulet_dalam_bisnis: number;

  @Column('int')
  @Min(1)
  @Max(95)
  flexible_kaku: number;

  @Column('int')
  @Min(1)
  @Max(95)
  kreatif_inovatif: number;

  @Column('int')
  @Min(1)
  @Max(95)
  jujur_dlm_bisnis: number;

  @Column('text')
  deskripsi_karakter: string;

  // Relation
  @ManyToOne(() => User, (user) => user, { nullable: true })
  createdBy: User;

  @OneToOne(() => User, (user) => user, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  // @ManyToOne(() => Submission, (submission) => submission.character_analysis, {
  //   cascade: true,
  //   nullable: false,
  //   onDelete: 'CASCADE',
  // })
  // submission: Submission;

  @OneToMany(() => Submission, (submission) => submission.character_analysis)
  submission: Submission[];
}

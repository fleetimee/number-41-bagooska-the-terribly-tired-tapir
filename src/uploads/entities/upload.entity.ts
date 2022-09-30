import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class Upload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  test: string;

  @Column()
  files: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  // Relation

  // @ManyToOne(() => User, (user) => user, {
  //   nullable: false,
  //   onDelete: 'CASCADE',
  // })
  // createdBy: User;

  @OneToOne(() => User, (user) => user, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  // @ManyToOne(() => Submission, (submission) => submission.uploads, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  //   nullable: false,
  // })
  // submission: Submission;
}

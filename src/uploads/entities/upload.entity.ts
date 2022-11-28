import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Upload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file: string;

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

  // @ManyToOne(() => Submission, (submission) => submission.uploads, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  //   nullable: false,
  // })
  // submission: Submission;
}

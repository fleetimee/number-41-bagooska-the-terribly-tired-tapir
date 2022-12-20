import { nanoid } from 'nanoid';
import { CheckReviewer } from 'src/check_reviewer/entities/check_reviewer.entity';
import { Debitur } from 'src/debiturs/entities/debitur.entity';
import { User } from 'src/users/entities/user.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Pengajuan {
  // generate primary key from custom function
  @PrimaryColumn()
  id: string;

  @Column()
  status: string;

  @Column('date')
  tgl_submit: Date;

  @Column('date')
  tgl_review: Date;

  @ManyToMany(() => User, (user) => user.pengajuan)
  user: User[];

  @ManyToOne(() => Debitur, (debitur) => debitur.pengajuan, {
    onDelete: 'CASCADE',
  })
  debitur: Debitur;

  @OneToOne(() => CheckReviewer, (checkReviewer) => checkReviewer.pengajuan, {
    onDelete: 'CASCADE',
  })
  checkReviewer: CheckReviewer;

  @Column({ nullable: true })
  debiturId: number;

  @BeforeInsert()
  beforeInsert() {
    this.id = customOutput();
  }
}

function customOutput() {
  // Prefix with 'P-' and generate 8 random characters
  return 'P-' + nanoid(4) + '-' + formatDate();
}

// format Date.now() to YYYY-MM-DD
function formatDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}${month}${day}`;
}

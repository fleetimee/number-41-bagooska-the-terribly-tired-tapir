import { NonFixed } from './../../non-fixeds/entities/non-fixed.entity';
import { customAlphabet } from 'nanoid';
import { User } from 'src/users/entities/user.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Fixed } from 'src/fixeds/entities/fixed.entity';

@Entity()
export class Submission {
  @PrimaryColumn()
  no_pengajuan: string;

  @Column('date', { default: () => 'CURRENT_DATE' })
  tgl_pengajuan: string;

  @ManyToMany(() => NonFixed, (nonfixed) => nonfixed.submission, {
    cascade: true,
  })
  @JoinTable({
    name: 'submission_nonfixed_junction',
  })
  nonfixed: NonFixed;

  @ManyToMany(() => Fixed, (fixed) => fixed.submission, {
    cascade: true,
  })
  @JoinTable({
    name: 'submission_fixed_junction',
  })
  fixed: Fixed;

  @ManyToOne(() => User, (user) => user, { nullable: false })
  createdBy: User;

  @OneToOne(() => User, (user) => user, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  @BeforeInsert()
  generateId() {
    const nanoid = customAlphabet('1234567890', 10);
    this.no_pengajuan = nanoid();
  }
}

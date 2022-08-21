import { CharacterAnalysis } from './../../character_analysis/entities/character_analysis.entity';
import { Analysis } from './../../business_analysis/entities/analysis.entity';
import { Collateral } from './../../collaterals/entities/collateral.entity';
import { Upload } from './../../uploads/entities/upload.entity';
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
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Fixed } from 'src/fixeds/entities/fixed.entity';

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  no_pengajuan: string;

  @Column('date', { default: () => 'CURRENT_DATE' })
  tgl_pengajuan: string;

  // Relation
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

  @ManyToOne(() => User, (user) => user, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  createdBy: User;

  @OneToOne(() => User, (user) => user, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  @OneToMany(() => Upload, (upload) => upload.submission, {})
  uploads: Upload[];

  @ManyToOne(() => Collateral, (collateral) => collateral.submission, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  collateral: Collateral;

  // @OneToMany(
  //   () => Analysis,
  //   (business_analysis) => business_analysis.submission,
  // )
  // business_analysis: Analysis[];

  @ManyToOne(
    () => Analysis,
    (business_analysis) => business_analysis.submission,
    {
      cascade: true,
      onDelete: 'SET NULL',
    },
  )
  business_analysis: Analysis;

  @ManyToOne(
    () => CharacterAnalysis,
    (character_analysis) => character_analysis.submission,
    {
      cascade: true,
      onDelete: 'SET NULL',
    },
  )
  character_analysis: CharacterAnalysis;

  @BeforeInsert()
  generateId() {
    const nanoid = customAlphabet('1234567890', 10);
    this.no_pengajuan = nanoid();
  }
}

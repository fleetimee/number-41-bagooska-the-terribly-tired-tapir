import { Inject, Injectable } from '@nestjs/common/decorators';
import {
  FirebaseAdminCoreModule,
  FirebaseMessagingService,
} from '@redredgroup/nestjs-firebase-admin';
import { nanoid } from 'nanoid';
import { CheckPengutus } from 'src/check_pengutus/entities/check_pengutus.entity';
import { CheckReviewer } from 'src/check_reviewer/entities/check_reviewer.entity';
import { Debitur } from 'src/debiturs/entities/debitur.entity';
import { User } from 'src/users/entities/user.entity';
import * as admin from 'firebase-admin';
import {
  AfterLoad,
  AfterUpdate,
  BeforeInsert,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { PengajuanService } from '../pengajuan.service';
import { UsersService } from 'src/users/users.service';
import * as serviceAccount from 'src/serviceAccountKey.json';

@Entity()
export class Pengajuan {
  constructor(
    // @Inject(FirebaseMessagingService)
    private readonly firebaseMessagingService: FirebaseMessagingService,
  ) {}

  // generate primary key from custom function
  @PrimaryColumn()
  id: string;

  @Column()
  status: string;

  @Column('date')
  tgl_submit: Date;

  @Column('date')
  tgl_review: Date;

  @Column('date', { nullable: true })
  tgl_pemutusan: Date;

  @Column('simple-array', { nullable: true })
  bahasan_analis: string[];

  @Column('simple-array', { nullable: true })
  bahasan_reviewer: string[];

  @Column('simple-array', { nullable: true })
  bahasan_pengutus: string[];

  // return bahasan_analis to [] even if it's null

  @ManyToMany(() => User, (user) => user.pengajuan)
  user: User[];

  @ManyToOne(() => Debitur, (debitur) => debitur.pengajuan, {
    onDelete: 'CASCADE',
  })
  debitur: Debitur;

  @OneToOne(() => CheckReviewer, (checkReviewer) => checkReviewer.pengajuan, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  checkReviewer: CheckReviewer;

  @OneToOne(() => CheckPengutus, (checkPengutus) => checkPengutus.pengajuan, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  checkPengutus: CheckPengutus;

  @Column({ nullable: true })
  debiturId: number;

  @AfterLoad()
  async nullCheckReviewer() {
    if (this.bahasan_analis == null) {
      this.bahasan_analis = [];
    }
  }

  @AfterLoad()
  async nullCheckPengutus() {
    if (this.bahasan_reviewer == null) {
      this.bahasan_reviewer = [];
    }

    if (this.bahasan_pengutus == null) {
      this.bahasan_pengutus = [];
    }
  }

  @BeforeInsert()
  beforeInsert() {
    this.id = customOutput();
  }

  @AfterUpdate()
  async sendNotification() {
    // Initialize Firebase Messaging Service if the service is already initialized in app module

    // Get all users token
    const tokens = this.user.map((user) => user.fcmToken);

    // create the message
    const message = {
      notification: {
        title: 'Status Pengajuan Anda Telah Berubah',
        body: `Status pengajuan anda telah berubah menjadi ${this.status}`,
      },
      tokens: tokens,
    };

    // send the message
    try {
      await this.firebaseMessagingService.sendMulticast(message);
    } catch (error) {
      console.log(error);
    }
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

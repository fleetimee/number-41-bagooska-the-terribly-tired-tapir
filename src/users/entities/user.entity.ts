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
import { Role } from 'src/roles/entities/role.entity';
// import { AvatarGenerator } from 'random-avatar-generator';

import client from 'nekos.life';

const neko = new client();

import * as bcrypt from 'bcryptjs';
import { Debitur } from 'src/debiturs/entities/debitur.entity';
import { Pengajuan } from 'src/pengajuan/entities/pengajuan.entity';

const nekos = new client();

@Entity({
  orderBy: {
    id: 'ASC',
  },
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  displayName: string;

  @Column({ nullable: true })
  photoURL: string;

  constructor() {
    neko.avatar().then((url) => {
      this.photoURL = url.url;
    });
  }

  @Column({ nullable: true })
  fcmToken: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user)
  createdBy: User;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  // One to many to debiturs
  @OneToMany(() => Debitur, (debitur) => debitur.user, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  debiturs: Debitur[];

  @ManyToMany(() => Role, (role) => role.user, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  @JoinTable()
  roles: Role[];

  @ManyToMany(() => Pengajuan, (pengajuan) => pengajuan.user, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  @JoinTable()
  pengajuan: Pengajuan[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  @BeforeInsert()
  async insertPhotoURL() {
    this.photoURL = await generateNekosLife();
  }
}

async function generateNekosLife(): Promise<string> {
  try {
    const url = await neko.avatar();
    return url.url;
  } catch (error) {
    return 'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';
  }
}

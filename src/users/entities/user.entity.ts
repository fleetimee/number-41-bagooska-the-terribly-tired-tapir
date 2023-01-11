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

  @Column({
    nullable: true,
    default:
      'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
  })
  photoURL: string;

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
}

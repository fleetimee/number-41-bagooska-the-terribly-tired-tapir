import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Role } from 'src/roles/entities/role.entity';

@Entity({
  orderBy: {
    id: 'ASC',
  },
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  // Validate if username exists
  username: string;

  @Column()
  password: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user)
  createdBy: User;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  updatedBy: User;

  @ManyToMany(() => Role, (role) => role.user, {
    cascade: true,
    onDelete: 'SET NULL',
  })
  @JoinTable()
  roles: Role[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  orderBy: {
    id: 'ASC',
  },
})
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  createdDate: Date;

  @ManyToMany(() => User, (user) => user)
  @JoinColumn()
  createdBy: number;

  @UpdateDateColumn({ nullable: true })
  updatedDate: Date;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
  updatedBy: number;

  @ManyToMany(() => User, (user) => user.roles, {
    onDelete: 'CASCADE',
  })
  @JoinTable({})
  user: User[];
}

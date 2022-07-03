import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DebiturStatus } from './debitur-status.enum';

@Entity()
export class Debitur {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama_debitur: string;

  @Column()
  alamat: string;

  @Column()
  status: DebiturStatus;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Upload {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  images: string;
}

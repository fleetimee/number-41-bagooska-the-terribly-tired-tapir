import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InputRugiLaba {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

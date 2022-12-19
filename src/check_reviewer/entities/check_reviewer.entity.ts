import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CheckReviewer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  is_keuangan_approved: boolean;

  @Column()
  is_karakter_approved: boolean;

  @Column()
  is_agunan_approved: boolean;

  @Column()
  is_bisnis_approved: boolean;

  @Column()
  is_jenis_usaha_approved: boolean;
}

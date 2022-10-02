import { Agunan } from 'src/agunan/entities/agunan.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AgunanCash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deskripsi_panjang: string;

  @Column('bigint')
  nilai_pasar: number;

  @Column('bigint')
  nilai_liquidasi: number;

  @Column('bigint')
  nilai_pengikatan: number;

  @Column()
  pengikatan: string;

  @ManyToOne(() => Agunan, (agunan) => agunan.form_cash, {
    onDelete: 'CASCADE',
  })
  agunan: Agunan;

  @Column()
  agunanId: number;
}

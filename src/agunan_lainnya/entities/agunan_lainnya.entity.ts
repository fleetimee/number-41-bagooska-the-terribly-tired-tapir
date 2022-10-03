import { Agunan } from 'src/agunan/entities/agunan.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Entity()
export class AgunanLainnya {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deskripsi_panjang: string;

  @Column()
  nama_asuransi_penjamin: string;

  @Column('bigint')
  nilai_pasar: number;

  @Column('bigint')
  nilai_liquidasi: number;

  @Column('bigint')
  nilai_pengikatan: number;

  @Column()
  pengikatan: string;

  @ManyToOne(() => Agunan, (agunan) => agunan.form_lainnya, {
    onDelete: 'CASCADE',
  })
  agunan: Agunan;

  @Column()
  agunanId: number;
}

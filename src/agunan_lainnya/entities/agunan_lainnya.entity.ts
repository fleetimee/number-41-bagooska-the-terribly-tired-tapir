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

  @Column('bigint', { nullable: true, default: 0 })
  nilai_liquidasi: number;

  @Column('bigint', { nullable: true, default: 0 })
  nilai_pengikatan: number;

  @Column({ nullable: true, default: 'null' })
  pengikatan: string;

  @ManyToOne(() => Agunan, (agunan) => agunan.form_lainnya, {
    onDelete: 'CASCADE',
  })
  agunan: Agunan;

  @Column()
  agunanId: number;
}

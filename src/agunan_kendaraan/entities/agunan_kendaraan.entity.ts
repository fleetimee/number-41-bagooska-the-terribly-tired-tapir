import { Agunan } from 'src/agunan/entities/agunan.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AgunanKendaraan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jenis: string;

  @Column()
  merk: string;

  @Column()
  type: string;

  @Column()
  warna: string;

  @Column()
  tahun: number;

  @Column()
  no_polisi: string;

  @Column()
  no_rangka: string;

  @Column()
  no_mesin: string;

  @Column()
  no_bpkb: string;

  @Column()
  nama_pemilik: string;

  @Column()
  kondisi: string;

  @Column('bigint')
  nilai_pasar: number;

  @Column('bigint')
  nilai_liquidasi: number;

  @Column('bigint')
  nilai_pengikatan: number;

  @Column()
  pengikatan: string;

  @Column('text')
  deskripsi_panjang: string;

  @ManyToOne(() => Agunan, (agunan) => agunan.form_kendaraan, {
    onDelete: 'CASCADE',
  })
  agunan: Agunan;

  @Column()
  agunanId: number;
}

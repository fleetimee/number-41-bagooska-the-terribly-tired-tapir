import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  nilai_pasar: number;

  @Column()
  nilai_liquidasi: number;

  @Column()
  nilai_pengikatan: number;

  @Column()
  pengikatan: string;

  @Column('text')
  deskripsi_panjang: string;
}

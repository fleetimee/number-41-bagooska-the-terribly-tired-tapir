import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AgunanTanah {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  deskripsi_pendek: string;

  @Column()
  nama_pemilik: string;

  @Column()
  bukti_kepemilikan: string;

  @Column()
  luas_tanah: number;

  @Column('date')
  tanggal: Date;

  @Column()
  nilai_pasar: number;

  @Column()
  nilai_liquidasi: number;

  @Column()
  nilai_pengikatan: number;

  @Column()
  pengikatan: number;

  @Column('text')
  lokasi: string;

  @Column({ nullable: true })
  titik_koordinat: string;

  @Column('text')
  deskripsi_panjang: string;
}

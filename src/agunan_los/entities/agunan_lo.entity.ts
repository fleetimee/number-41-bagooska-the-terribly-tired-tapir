import { Agunan } from 'src/agunan/entities/agunan.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AgunanLo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deskripsi_pendek: string;

  @Column()
  nama_pemilik: string;

  @Column()
  komponen: string;

  @Column()
  tempat_lahir: string;

  @Column('date')
  tanggal_lahir: Date;

  @Column('text')
  alamat_pemilik: string;

  @Column()
  tempat_dasaran: string;

  @Column()
  no_registrasi: string;

  @Column('int')
  luas_los: number;

  @Column()
  jenis_dagangan: string;

  @Column('time')
  waktu_buka: Date;

  @Column('time')
  waktu_tutup: Date;

  @Column('date')
  berlaku_sampai: Date;

  @Column()
  nilai_pasar: number;

  @Column()
  nilai_liquidasi: number;

  @Column()
  nilai_pengikatan: number;

  @Column()
  lokasi_pasar: string;

  @Column()
  titik_koordinat: string;

  @Column()
  pengikatan: string;

  @Column()
  deskripsi_panjang: string;

  @ManyToOne(() => Agunan, (agunan) => agunan.form_los, {
    onDelete: 'CASCADE',
  })
  agunan: Agunan;

  @Column()
  agunanId: number;
}

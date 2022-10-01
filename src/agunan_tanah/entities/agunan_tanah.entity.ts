import { Agunan } from './../../agunan/entities/agunan.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('int')
  luas_tanah: number;

  @Column('date')
  tanggal: Date;

  @Column('bigint')
  nilai_pasar: number;

  @Column('bigint')
  nilai_liquidasi: number;

  @Column('bigint')
  nilai_pengikatan: number;

  @Column()
  pengikatan: string;

  @Column('text')
  lokasi: string;

  @Column({ nullable: true })
  titik_koordinat: string;

  @Column('text')
  deskripsi_panjang: string;

  @ManyToOne(() => Agunan, (agunan) => agunan.form_tanah, {
    onDelete: 'CASCADE',
  })
  agunan: Agunan;

  @Column()
  agunanId: number;
}

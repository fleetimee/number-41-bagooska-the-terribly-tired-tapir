import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InputKeuangan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint')
  kredit_diusulkan: number;

  @Column('int')
  angsuran: number;

  @Column('int')
  bunga_per_tahun: number;

  @Column('int')
  provisi: number;

  @Column('character varying')
  sistem_angsuran: string;

  @Column('text')
  digunakan_untuk: string;

  @Column('bigint')
  angsuran_rp: number;

  @Column('bigint')
  pinjaman_lainnya: number;

  @Column('bigint')
  angsuran_pinjaman_lainnya: number;

  @Column('bigint')
  nilai_aset: number;

  @Column('int')
  hpp: number;

  @Column('bigint')
  penjualan_kini: number;

  @Column('bigint')
  biaya_bahan_kini: number;

  @Column('bigint')
  biaya_operasional_kini: number;

  @Column('bigint')
  biaya_upah_kini: number;

  @Column('bigint')
  biaya_hidup_kini: number;

  @Column('bigint')
  penjualan_asumsi: number;

  @Column('bigint')
  biaya_bahan_asumsi: number;

  @Column('bigint')
  biaya_operasional_asumsi: number;

  @Column('bigint')
  biaya_upah_asumsi: number;

  @Column('bigint')
  biaya_hidup_asumsi: number;

  @Column('int')
  trade_cycle: number;
}

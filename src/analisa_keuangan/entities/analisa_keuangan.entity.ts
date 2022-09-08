import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnalisaKeuangan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint')
  total_aset: number;

  @Column('bigint')
  jumlah_aset_kini: number;

  @Column('bigint')
  total_angsuran_keseluruhan: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_omzet_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_omzet_yad: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_biaya_bahan_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_biaya_bahan_yad: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_biaya_operasi_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_biaya_operasi_yad: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_biaya_upah_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_biaya_upah_yad: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_biaya_hidup_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_biaya_hidup_yad: number;

  @Column('bigint')
  total_laba_usaha_kini: number;

  @Column('bigint')
  total_laba_usaha_yad: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_laba_usaha_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_laba_usaha_yad: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_ratio_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_ratio_yad: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_roe_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_roe_yad: number;

  @Column()
  keterangan_roe: string;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_roa_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_roa_yad: number;

  @Column()
  keterangan_roa: string;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_der_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_der_yad: number;

  @Column()
  keterangan_der: string;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_dsc_kini: number;

  @Column('decimal', { precision: 5, scale: 2 })
  persen_dsc_yad: number;

  @Column()
  keterangan_dsc: string;

  @Column('bool')
  kredit_disetujuin: boolean;

  @Column('bigint')
  pinjaman_maksimal: number;

  @Column('bigint')
  perhitungan_modal_kerja: number;

  @Column('bigint')
  kebutuhan_investasi: number;

  @Column('bigint')
  kebutuhan_kredit: number;

  @Column('double precision')
  total_crr_keuangan: number;
}

import { Debitur } from './../../debiturs/entities/debitur.entity';
import { InputRugiLaba } from './../../input_rugi_laba/entities/input_rugi_laba.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToOne(() => InputRugiLaba, (inputRugiLaba) => inputRugiLaba, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  rugilaba: InputRugiLaba;

  @OneToOne(() => Debitur, (debitur) => debitur, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  debitur: Debitur;
}

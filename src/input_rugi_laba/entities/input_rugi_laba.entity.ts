import { InputNeraca } from './../../input_neraca/entities/input_neraca.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class InputRugiLaba {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint')
  kas: number;

  @Column('bigint')
  bank: number;

  @Column('bigint')
  piutang: number;

  @Column('bigint')
  persediaan: number;

  @Column('bigint')
  jumlah_aktiva_lancar: number;

  @Column('bigint')
  jumlah_aktiva_tetap: number;

  @Column('bigint')
  sum_aktiva: number;

  @Column('bigint')
  hutang_usaha: number;

  @Column('bigint')
  hutang_bank: number;

  @Column('bigint')
  hutang_lainnya: number;

  @Column('bigint')
  jumlah_hutang: number;

  @Column('bigint')
  jumlah_modal: number;

  @Column('bigint')
  sum_pasiva: number;

  @Column('bigint')
  omzet: number;

  @Column('bigint')
  harga_pokok: number;

  @Column('bigint')
  laba_kotor: number;

  @Column('bigint')
  biaya_tenaga_kerja: number;

  @Column('bigint')
  biaya_operasional: number;

  @Column('bigint')
  biaya_lainnya: number;

  @Column('bigint')
  total_biaya: number;

  @Column('bigint')
  laba_sebelum_pajak: number;

  @Column('bigint')
  perkiraan_pajak: number;

  @Column('bigint')
  laba_setelah_pajak: number;

  @Column('bigint')
  penghasilan: number;

  @Column('bigint')
  biaya_hidup: number;

  @Column('bigint')
  sisa_penghasilan: number;

  @OneToOne(() => InputNeraca, (inputNeraca) => inputNeraca, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  neraca: InputNeraca;
}

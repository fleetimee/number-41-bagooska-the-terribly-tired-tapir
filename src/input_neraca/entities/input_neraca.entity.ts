import { InputRugiLaba } from './../../input_rugi_laba/entities/input_rugi_laba.entity';
import { Debitur } from 'src/debiturs/entities/debitur.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class InputNeraca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  tanggal_input: Date;

  @Column('bigint')
  kas_on_hand: number;

  @Column('bigint')
  tabungan: number;

  @Column('bigint')
  jumlah_kas_dan_tabungan: number;

  @Column('bigint')
  jumlah_piutang: number;

  @Column('bigint')
  jumlah_persediaan: number;

  @Column('bigint')
  hutang_usaha: number;

  @Column('bigint')
  hutang_bank: number;

  @Column('bigint', {
    nullable: true,
  })
  peralatan: number;

  @Column('bigint', {
    nullable: true,
  })
  kendaraan: number;

  @Column('bigint', {
    nullable: true,
  })
  tanah_bangunan: number;

  @Column('bigint')
  aktiva_tetap: number;

  // Relationship
  // @ManyToOne(() => Debitur, (debitur) => debitur.inputNeraca, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  // })
  // debitur: Debitur;

  @OneToOne(() => Debitur, (debitur) => debitur, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  debitur: Debitur;

  @OneToOne(() => InputRugiLaba, (inputRugiLaba) => inputRugiLaba.neraca)
  inputRugiLaba: InputRugiLaba;
}

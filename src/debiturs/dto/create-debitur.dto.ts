import { IsNotEmpty } from 'class-validator';

export class CreateDebiturDto {
  @IsNotEmpty()
  nama_debitur: string;

  @IsNotEmpty()
  alamat: string;
}

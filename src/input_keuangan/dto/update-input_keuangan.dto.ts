import { PartialType } from '@nestjs/swagger';
import { CreateInputKeuanganDto } from './create-input_keuangan.dto';

export class UpdateInputKeuanganDto extends PartialType(
  CreateInputKeuanganDto,
) {}

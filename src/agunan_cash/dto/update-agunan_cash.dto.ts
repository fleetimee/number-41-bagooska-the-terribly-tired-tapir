import { PartialType } from '@nestjs/swagger';
import { CreateAgunanCashDto } from './create-agunan_cash.dto';

export class UpdateAgunanCashDto extends PartialType(CreateAgunanCashDto) {}

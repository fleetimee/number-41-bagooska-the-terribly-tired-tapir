import { PartialType } from '@nestjs/swagger';
import { CreateAnalisaAgunanDto } from './create-analisa_agunan.dto';

export class UpdateAnalisaAgunanDto extends PartialType(CreateAnalisaAgunanDto) {}

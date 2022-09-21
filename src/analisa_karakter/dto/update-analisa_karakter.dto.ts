import { PartialType } from '@nestjs/swagger';
import { CreateAnalisaKarakterDto } from './create-analisa_karakter.dto';

export class UpdateAnalisaKarakterDto extends PartialType(CreateAnalisaKarakterDto) {}

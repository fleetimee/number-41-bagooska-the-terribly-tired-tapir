import { PartialType } from '@nestjs/swagger';
import { CreateSyaratLainDto } from './create-syarat_lain.dto';

export class UpdateSyaratLainDto extends PartialType(CreateSyaratLainDto) {}

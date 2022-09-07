import { PartialType } from '@nestjs/swagger';
import { CreateInputRugiLabaDto } from './create-input_rugi_laba.dto';

export class UpdateInputRugiLabaDto extends PartialType(CreateInputRugiLabaDto) {}

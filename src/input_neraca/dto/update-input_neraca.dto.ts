import { PartialType } from '@nestjs/swagger';
import { CreateInputNeracaDto } from './create-input_neraca.dto';

export class UpdateInputNeracaDto extends PartialType(CreateInputNeracaDto) {}

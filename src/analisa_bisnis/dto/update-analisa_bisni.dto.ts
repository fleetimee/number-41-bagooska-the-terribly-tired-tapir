import { PartialType } from '@nestjs/swagger';
import { CreateAnalisaBisniDto } from './create-analisa_bisni.dto';

export class UpdateAnalisaBisniDto extends PartialType(CreateAnalisaBisniDto) {}

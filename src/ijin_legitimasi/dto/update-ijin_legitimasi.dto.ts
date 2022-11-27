import { PartialType } from '@nestjs/swagger';
import { CreateIjinLegitimasiDto } from './create-ijin_legitimasi.dto';

export class UpdateIjinLegitimasiDto extends PartialType(CreateIjinLegitimasiDto) {}

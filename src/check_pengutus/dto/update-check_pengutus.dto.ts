import { PartialType } from '@nestjs/swagger';
import { CreateCheckPengutusDto } from './create-check_pengutus.dto';

export class UpdateCheckPengutusDto extends PartialType(CreateCheckPengutusDto) {}

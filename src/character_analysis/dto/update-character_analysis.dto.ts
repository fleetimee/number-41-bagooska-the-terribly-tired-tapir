import { PartialType } from '@nestjs/swagger';
import { CreateCharacterAnalysisDto } from './create-character_analysis.dto';

export class UpdateCharacterAnalysisDto extends PartialType(CreateCharacterAnalysisDto) {}

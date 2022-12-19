import { PartialType } from '@nestjs/swagger';
import { CreateCheckReviewerDto } from './create-check_reviewer.dto';

export class UpdateCheckReviewerDto extends PartialType(CreateCheckReviewerDto) {}

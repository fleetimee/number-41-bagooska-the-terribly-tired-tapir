import { PartialType } from '@nestjs/swagger';
import { CreateCollateralDto } from './create-collateral.dto';

export class UpdateCollateralDto extends PartialType(CreateCollateralDto) {}

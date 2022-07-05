import { UpdateFixedDto } from './dto/update-fixed.dto';
import { CreateFixedDto } from './dto/create-fixed.dto';
import { Fixed } from './entities/fixed.entity';
import { Controller } from '@nestjs/common';
import { FixedsService } from './fixeds.service';

import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Penghasilan Tetap')
@Crud({
  model: {
    type: Fixed,
  },
  query: {
    join: {
      debitur: {
        eager: true,
      },
    },
  },
  dto: {
    create: CreateFixedDto,
    update: UpdateFixedDto,
  },
})
@Controller('fixeds')
export class FixedsController implements CrudController<Fixed> {
  constructor(public service: FixedsService) {}
}

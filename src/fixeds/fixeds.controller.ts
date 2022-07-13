import { UpdateFixedDto } from './dto/update-fixed.dto';
import { CreateFixedDto } from './dto/create-fixed.dto';
import { Fixed } from './entities/fixed.entity';
import { Controller } from '@nestjs/common';
import { FixedsService } from './fixeds.service';

import { Crud, CrudController } from '@rewiko/crud';
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
        allow: ['nama_debitur', 'no_debitur'],
      },
      createdBy: {
        eager: true,
        allow: ['username'],
        exclude: ['password'],
      },
    },
    sort: [
      {
        field: 'id',
        order: 'ASC',
      },
    ],
  },
  dto: {
    create: CreateFixedDto,
    update: UpdateFixedDto,
    replace: UpdateFixedDto,
  },
})
@Controller('fixeds')
export class FixedsController implements CrudController<Fixed> {
  constructor(public service: FixedsService) {}
}

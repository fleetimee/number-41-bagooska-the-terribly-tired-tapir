import { UpdateNonFixedDto } from './dto/update-non-fixed.dto';
import { CreateNonFixedDto } from './dto/create-non-fixed.dto';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { NonFixed } from './entities/non-fixed.entity';
import { NonFixedsService } from './non-fixeds.service';

@ApiTags('Penghasilan Tidak Tetap')
@Crud({
  model: {
    type: NonFixed,
  },
  dto: {
    create: CreateNonFixedDto,
    update: UpdateNonFixedDto,
    replace: UpdateNonFixedDto,
  },
  query: {
    join: {
      debitur: {
        eager: true,
        allow: ['nama_debitur', 'no_debitur'],
      },
    },
  },
})
@Controller('non-fixeds')
export class NonFixedsController implements CrudController<NonFixed> {
  constructor(public service: NonFixedsService) {}
}

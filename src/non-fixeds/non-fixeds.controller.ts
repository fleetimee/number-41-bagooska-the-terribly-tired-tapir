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
})
@Controller('non-fixeds')
export class NonFixedsController implements CrudController<NonFixed> {
  constructor(public service: NonFixedsService) {}
}

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { DebitursService } from './debiturs.service';
import { Debitur } from './entities/debitur.entity';

@ApiTags('Debitur')
@Crud({
  model: {
    type: Debitur,
  },
  query: {
    join: {
      nonfixed: {
        eager: true,
      },
      fixed: {
        eager: true,
      },
    },
  },
})
@Controller('debiturs')
export class DebitursController implements CrudController<Debitur> {
  constructor(public service: DebitursService) {}
}

import { Agunan } from './entities/agunan.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AgunanService } from './agunan.service';

@Crud({
  model: {
    type: Agunan,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
    },
  },
  query: {
    join: {
      debitur: {
        eager: true,
      },
    },
  },
})
@Controller('/debitur/:id/agunan')
export class AgunanController implements CrudController<Agunan> {
  constructor(public service: AgunanService) {}
}

import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AsuransiService } from './asuransi.service';
import { Asuransi } from './entities/asuransi.entity';

@Crud({
  model: {
    type: Asuransi,
  },
  params: {
    debiturId: {
      field: 'debiturId',
      type: 'number',
    },
  },
  query: {
    join: {
      debitur: {
        eager: true,
        allow: ['peminjam1'],
      },
    },
  },
})
@Controller('/debiturs/:debiturId/asuransi')
export class AsuransiController implements CrudController<Asuransi> {
  constructor(public service: AsuransiService) {}
}

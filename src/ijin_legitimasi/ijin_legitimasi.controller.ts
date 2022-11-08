import { IjinLegitimasi } from './entities/ijin_legitimasi.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { IjinLegitimasiService } from './ijin_legitimasi.service';

@Crud({
  model: {
    type: IjinLegitimasi,
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
@Controller('/debiturs/:debiturId/ijin-legitimasi')
export class IjinLegitimasiController
  implements CrudController<IjinLegitimasi>
{
  constructor(public service: IjinLegitimasiService) {}
}

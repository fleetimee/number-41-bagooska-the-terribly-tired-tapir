import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { AgunanTanahBangunanService } from './agunan_tanah_bangunan.service';
import { AgunanTanahBangunan } from './entities/agunan_tanah_bangunan.entity';

@Crud({
  model: {
    type: AgunanTanahBangunan,
  },
  params: {
    agunanId: {
      field: 'agunanId',
      type: 'number',
    },
  },
  query: {
    join: {
      agunan: {
        eager: true,
      },
      'agunan.debitur': {
        eager: true,
        allow: ['peminjam1'],
      },
    },
  },
})
@Controller('/agunan/:agunanId/agunan-tanah-bangunan')
export class AgunanTanahBangunanController
  implements CrudController<AgunanTanahBangunan>
{
  constructor(public service: AgunanTanahBangunanService) {}
}

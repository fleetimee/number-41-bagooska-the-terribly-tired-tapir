import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AgunanPeralatanService } from './agunan_peralatan.service';
import { AgunanPeralatan } from './entities/agunan_peralatan.entity';

@Crud({
  model: {
    type: AgunanPeralatan,
  },
  params: {
    agunanId: {
      field: 'agunanId',
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
@Controller('/agunan/:agunanId/agunan-peralatan')
export class AgunanPeralatanController
  implements CrudController<AgunanPeralatan>
{
  constructor(public service: AgunanPeralatanService) {}
}

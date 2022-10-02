import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { AgunanLosService } from './agunan_los.service';
import { AgunanLo } from './entities/agunan_lo.entity';

@Crud({
  model: {
    type: AgunanLo,
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
@Controller('/agunan/:agunanId/agunan-los')
export class AgunanLosController implements CrudController<AgunanLo> {
  constructor(public service: AgunanLosService) {}
}

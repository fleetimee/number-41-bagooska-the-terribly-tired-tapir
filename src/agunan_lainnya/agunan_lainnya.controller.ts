import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { AgunanLainnyaService } from './agunan_lainnya.service';
import { AgunanLainnya } from './entities/agunan_lainnya.entity';

@Crud({
  model: {
    type: AgunanLainnya,
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
@Controller('/agunan/:agunanId/agunan-lainnya')
export class AgunanLainnyaController implements CrudController<AgunanLainnya> {
  constructor(public service: AgunanLainnyaService) {}
}

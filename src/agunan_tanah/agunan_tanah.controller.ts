import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AgunanTanahService } from './agunan_tanah.service';
import { AgunanTanah } from './entities/agunan_tanah.entity';

@Crud({
  model: {
    type: AgunanTanah,
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
@Controller('/agunan/:agunanId/agunan-tanah')
export class AgunanTanahController implements CrudController<AgunanTanah> {
  constructor(public service: AgunanTanahService) {}
}

import { AgunanCash } from './entities/agunan_cash.entity';
import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { AgunanCashService } from './agunan_cash.service';

@Crud({
  model: {
    type: AgunanCash,
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
@Controller('/agunan/:agunanId/agunan-cash')
export class AgunanCashController implements CrudController<AgunanCash> {
  constructor(public service: AgunanCashService) {}
}

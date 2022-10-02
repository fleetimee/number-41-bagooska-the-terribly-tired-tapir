import { Agunan } from './entities/agunan.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AgunanService } from './agunan.service';

@Crud({
  model: {
    type: Agunan,
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
      form_tanah: {
        eager: true,
      },
      form_kendaraan: {
        eager: true,
      },
      form_peralatan: {
        eager: true,
      },
      form_cash: {
        eager: true,
      },
      form_los: {
        eager: true,
      },
    },
  },
})
@Controller('/debiturs/:debiturId/agunan')
export class AgunanController implements CrudController<Agunan> {
  constructor(public service: AgunanService) {}
}

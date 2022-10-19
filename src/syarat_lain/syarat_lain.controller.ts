import { SyaratLain } from './entities/syarat_lain.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { SyaratLainService } from './syarat_lain.service';

@Crud({
  model: {
    type: SyaratLain,
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
@Controller('/debiturs/:debiturId/syarat-lain')
export class SyaratLainController implements CrudController<SyaratLain> {
  constructor(public service: SyaratLainService) {}
}

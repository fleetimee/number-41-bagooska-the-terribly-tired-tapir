import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { AnalisaAgunan } from './entities/analisa_agunan.entity';
import { AnalisaAgunanService } from './analisa_agunan.service';

@Crud({
  model: {
    type: AnalisaAgunan,
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
@Controller('/debiturs/:debiturId/analisa-agunan')
export class AnalisaAgunanController implements CrudController<AnalisaAgunan> {
  constructor(public service: AnalisaAgunanService) {}
}

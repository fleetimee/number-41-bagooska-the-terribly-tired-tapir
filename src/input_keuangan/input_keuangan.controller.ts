import { InputKeuangan } from './entities/input_keuangan.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { InputKeuanganService } from './input_keuangan.service';

@Crud({
  model: {
    type: InputKeuangan,
  },
  query: {
    join: {
      debitur: {
        eager: true,
        allow: ['peminjam1', 'no_debitur'],
      },
      rugilaba: {
        eager: true,
      },
    },
  },
})
@Controller('input-keuangan')
export class InputKeuanganController implements CrudController<InputKeuangan> {
  constructor(public service: InputKeuanganService) {}
}

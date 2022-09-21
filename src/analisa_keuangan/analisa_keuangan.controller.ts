import { AnalisaKeuangan } from './entities/analisa_keuangan.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AnalisaKeuanganService } from './analisa_keuangan.service';

@Crud({
  model: {
    type: AnalisaKeuangan,
  },
  query: {
    join: {
      debitur: {
        eager: true,
      },
      keuangan: {
        eager: true,
      },
    },
  },
})
@Controller('analisa-keuangan')
export class AnalisaKeuanganController
  implements CrudController<AnalisaKeuangan>
{
  constructor(public service: AnalisaKeuanganService) {}
}

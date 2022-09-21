import { AnalisaKarakter } from './entities/analisa_karakter.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AnalisaKarakterService } from './analisa_karakter.service';

@Crud({
  model: {
    type: AnalisaKarakter,
  },
  query: {
    join: {
      debitur: {
        eager: true,
      },
    },
  },
})
@Controller('analisa-karakter')
export class AnalisaKarakterController
  implements CrudController<AnalisaKarakter>
{
  constructor(public service: AnalisaKarakterService) {}
}

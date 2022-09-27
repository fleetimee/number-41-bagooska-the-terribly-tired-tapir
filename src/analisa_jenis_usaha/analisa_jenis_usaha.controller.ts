import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AnalisaJenisUsahaService } from './analisa_jenis_usaha.service';
import { AnalisaJenisUsaha } from './entities/analisa_jenis_usaha.entity';

@Crud({
  model: {
    type: AnalisaJenisUsaha,
  },
  query: {
    join: {
      debitur: {
        eager: true,
      },
    },
  },
})
@Controller('analisa-jenis-usaha')
export class AnalisaJenisUsahaController
  implements CrudController<AnalisaJenisUsaha>
{
  constructor(public service: AnalisaJenisUsahaService) {}
}

import { AnalisaBisni } from './entities/analisa_bisni.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AnalisaBisnisService } from './analisa_bisnis.service';

@Crud({
  model: {
    type: AnalisaBisni,
  },
  query: {
    join: {
      debitur: {
        eager: true,
      },
    },
  },
})
@Controller('analisa-bisnis')
export class AnalisaBisnisController implements CrudController<AnalisaBisni> {
  constructor(public service: AnalisaBisnisService) {}
}

import { InputRugiLaba } from './entities/input_rugi_laba.entity';
import { Controller } from '@nestjs/common';
import { InputRugiLabaService } from './input_rugi_laba.service';
import { Crud, CrudController } from '@rewiko/crud';

@Crud({
  model: {
    type: InputRugiLaba,
  },
  query: {
    join: {
      neraca: {
        eager: true,
      },
    },
  },
})
@Controller('input-rugi-laba')
export class InputRugiLabaController implements CrudController<InputRugiLaba> {
  constructor(public service: InputRugiLabaService) {}
}

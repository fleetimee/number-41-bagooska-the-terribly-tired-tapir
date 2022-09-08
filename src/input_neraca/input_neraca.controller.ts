import { InputNeraca } from './entities/input_neraca.entity';
import { Controller } from '@nestjs/common';
import { InputNeracaService } from './input_neraca.service';
import { Crud, CrudController } from '@rewiko/crud';

@Crud({
  model: {
    type: InputNeraca,
  },
  query: {
    join: {
      debitur: {
        eager: true,
        allow: ['peminjam1', 'no_debitur'],
      },
      inputRugiLaba: {
        eager: true,
      },
    },
  },
})
@Controller('input-neraca')
export class InputNeracaController implements CrudController<InputNeraca> {
  constructor(public service: InputNeracaService) {}
}

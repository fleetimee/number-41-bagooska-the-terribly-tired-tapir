import { InputNeraca } from './entities/input_neraca.entity';
import { Controller } from '@nestjs/common';
import { InputNeracaService } from './input_neraca.service';
import { Crud, CrudController } from '@rewiko/crud';

@Crud({
  model: {
    type: InputNeraca,
  },
})
@Controller('input-neraca')
export class InputNeracaController implements CrudController<InputNeraca> {
  constructor(public service: InputNeracaService) {}
}

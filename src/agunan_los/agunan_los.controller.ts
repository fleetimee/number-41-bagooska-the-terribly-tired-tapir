import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { AgunanLosService } from './agunan_los.service';
import { AgunanLo } from './entities/agunan_lo.entity';

@Crud({
  model: {
    type: AgunanLo,
  },
})
@Controller('agunan-los')
export class AgunanLosController implements CrudController<AgunanLo> {
  constructor(public service: AgunanLosService) {}
}

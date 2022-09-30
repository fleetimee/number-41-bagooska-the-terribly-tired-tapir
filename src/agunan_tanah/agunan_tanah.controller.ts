import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AgunanTanahService } from './agunan_tanah.service';
import { AgunanTanah } from './entities/agunan_tanah.entity';

@Crud({
  model: {
    type: AgunanTanah,
  },
})
@Controller('agunan-tanah')
export class AgunanTanahController implements CrudController<AgunanTanah> {
  constructor(public service: AgunanTanahService) {}
}

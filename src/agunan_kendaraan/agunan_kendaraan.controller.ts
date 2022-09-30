import { AgunanKendaraan } from './entities/agunan_kendaraan.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@rewiko/crud';
import { AgunanKendaraanService } from './agunan_kendaraan.service';

@Crud({
  model: {
    type: AgunanKendaraan,
  },
})
@Controller('agunan-kendaraan')
export class AgunanKendaraanController
  implements CrudController<AgunanKendaraan>
{
  constructor(public service: AgunanKendaraanService) {}
}

import { Controller } from '@nestjs/common';
import { CheckPengutusService } from './check_pengutus.service';
import { CheckPengutus } from './entities/check_pengutus.entity';
import { Crud, CrudController } from '@rewiko/crud';

@Crud({
  model: {
    type: CheckPengutus,
  },
  query: {
    join: {
      pengajuan: {
        eager: true,
      },
    },
  },
  params: {
    pengajuanId: {
      field: 'pengajuanId',
      type: 'string',
    },
  },
})
@Controller('/pengajuan/:pengajuanId/check-pengutus')
export class CheckPengutusController implements CrudController<CheckPengutus> {
  constructor(public service: CheckPengutusService) {}
}

import { Controller } from '@nestjs/common';
import { PengajuanService } from './pengajuan.service';
import { Crud, CrudController } from '@rewiko/crud';
import { Pengajuan } from './entities/pengajuan.entity';

@Crud({
  model: {
    type: Pengajuan,
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
})
@Controller('pengajuan')
export class PengajuanController implements CrudController<Pengajuan> {
  constructor(public service: PengajuanService) {}
}

import { Controller } from '@nestjs/common';
import { PengajuanService } from './pengajuan.service';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@rewiko/crud';
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
  query: {
    sort: [{ field: 'id', order: 'ASC' }],
    join: {
      user: {
        eager: true,
        exclude: ['password'],
      },
      debitur: {
        eager: true,
        allow: ['id', 'no_debitur', 'peminjam1', 'alamat_1'],
      },
      checkReviewer: {
        eager: true,
      },
      checkPengutus: {
        eager: true,
      },
    },
  },
})
@Controller('pengajuan')
export class PengajuanController implements CrudController<Pengajuan> {
  constructor(public service: PengajuanService) {}

  get base(): CrudController<Pengajuan> {
    return this;
  }

  @Override()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Pengajuan,
  ) {
    return this.base.createOneBase(req, dto).then((res) => {
      // send notification
      this.service.sendNotification(
        // return token from user
        res.user[1].fcmToken,
        'Penambahan Pengajuan',
        'Ada pengajuan baru dari ' + res.user[0].displayName,
      );

      return res;
    });
  }

  // @Override()
  // async replaceOne(
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() dto: Pengajuan,
  // ) {
  //   return this.base.replaceOneBase(req, dto).then((res) => {
  //     // send notification
  //     this.service.sendNotification(
  //       // return token from user
  //       res.user[1].fcmToken,
  // }
}

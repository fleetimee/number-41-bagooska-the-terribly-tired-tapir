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
    sort: [{ field: 'tgl_submit', order: 'ASC' }],
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
        'Penambahan Pengajuan ' + res.id,
        'Ada pengajuan baru dari analis ' + res.user[0].displayName,
      );

      return res;
    });
  }

  @Override()
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Pengajuan,
  ) {
    return this.base.updateOneBase(req, dto).then((res) => {
      // send notification
      this.service.sendNotification(
        // return token from user
        res.user[2].fcmToken,
        'Pengajuan ' + res.id + ' Telah Diperiksa',
        'Pengajuan ' +
          res.id +
          ' telah diperiksa oleh ' +
          res.user[1].displayName,
      );

      // check if status changed to REVIEWED
      if (res.status === 'REVIEWED') {
        // send notification to reviewer
        this.service.sendNotificationToAnalis(
          res.user[0].fcmToken,
          'Pengajuan Sudah Diperiksa',
          'Pengajuan ' +
            res.id +
            ' sudah diperiksa oleh ' +
            res.user[1].displayName,
        );
      }

      return res;
    });
  }

  @Override()
  async replaceOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Pengajuan,
  ) {
    return this.base.replaceOneBase(req, dto).then((res) => {
      const tokens = res.user.map((user) => user.fcmToken).slice(0, 2);

      if (res.status === 'DONE') {
        // send notification to analis and reviewer

        this.service.sendNotificationToAnalisAndReviewer(
          tokens,
          'Pengajuan Disetujui',
          'Pengajuan ' + res.id + ' disetujui',
        );
      } else {
        // send notification to analis
        this.service.sendNotificationToAnalisAndReviewer(
          // return token from user
          tokens,
          'Pengajuan Ditolak',
          'Pengajuan ' + res.id + ' ditolak',
        );
      }

      return res;
    });
  }
}

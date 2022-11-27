import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@rewiko/crud';
import { DebitursService } from './debiturs.service';
import { Debitur } from './entities/debitur.entity';

@ApiTags('Debitur')
@Crud({
  /* Telling the crud controller that the model is Debitur */
  model: {
    type: Debitur,
  },
  query: {
    // limit: 100,
    alwaysPaginate: true,
    sort: [{ field: 'id', order: 'ASC' }],
    join: {
      syaratLain: {
        // eager: true,
      },
      ijinLegitimasi: {
        // eager: true,
      },
      asuransi: {
        // eager: true,
      },
      inputNeraca: {
        // eager: true,
      },
      inputRugiLaba: {
        // eager: true,
      },
      inputKeuangan: {
        // eager: true,
      },
      analisaKeuangan: {
        // eager: true,
      },
      analisaBisnis: {
        // eager: true,
      },
      analisaKarakter: {
        // eager: true,
      },
      analisaJenisUsaha: {
        // eager: true,
      },
      agunan: {
        // eager: true,
      },
      analisaAgunan: {
        // eager: true,
      },
      'agunan.form_tanah': {
        // eager: true,
      },
      'agunan.form_tanah_bangunan': {
        // eager: true,
      },
      'agunan.form_kendaraan': {
        // eager: true,
      },
      'agunan.form_peralatan': {
        // eager: true,
      },
      'agunan.form_cash': {
        // eager: true,
      },
      'agunan.form_los': {
        // eager: true,
      },
      'agunan.form_lainnya': {
        // eager: true,
      },
      createdBy: {
        eager: true,
        exclude: ['password'],
        allow: ['username'],
      },
    },
  },
})
@Controller('debiturs')
export class DebitursController implements CrudController<Debitur> {
  constructor(public service: DebitursService) {}
}

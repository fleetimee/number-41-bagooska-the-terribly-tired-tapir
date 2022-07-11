import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { SubmissionsService } from './submissions.service';
import { Submission } from './entities/submission.entity';

@Crud({
  model: {
    type: Submission,
  },
  query: {
    join: {
      createdBy: {
        eager: true,
        allow: ['username'],
        exclude: ['password'],
      },
      nonfixed: {
        eager: true,
      },
      'nonfixed.debitur': {
        eager: true,
        allow: ['nama_debitur', 'no_debitur', 'nik'],
        alias: 'debitur_tidak_tetap',
      },
      fixed: {
        eager: true,
      },
      'fixed.debitur': {
        eager: true,
        allow: ['nama_debitur', 'no_debitur', 'nik'],
        alias: 'debitur_tetap',
      },
    },
  },
})
@Controller('submissions')
export class SubmissionsController implements CrudController<Submission> {
  constructor(public service: SubmissionsService) {}
}

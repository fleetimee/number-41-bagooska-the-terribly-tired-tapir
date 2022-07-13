import { Upload } from './../uploads/entities/upload.entity';
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
      collateral: {
        eager: true,
      },
      business_analysis: {
        eager: true,
      },
      character_analysis: {
        eager: true,
      },
      uploads: {
        eager: true,
      },
      createdBy: {
        eager: true,
        allow: ['username'],
        exclude: ['password'],
      },
    },
  },
})
@Controller('submissions')
export class SubmissionsController implements CrudController<Submission> {
  constructor(public service: SubmissionsService) {}
}

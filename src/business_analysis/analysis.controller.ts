import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { Analysis } from './entities/analysis.entity';

@Crud({
  model: {
    type: Analysis,
  },
  query: {
    join: {
      submission: {
        eager: true,
      },
      'submission.fixed': {
        eager: true,
      },
      'submission.nonfixed': {
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
@Controller('business_analysis')
export class AnalysisController implements CrudController<Analysis> {
  constructor(public service: AnalysisService) {}
}

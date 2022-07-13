import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { CollateralsService } from './collaterals.service';
import { Collateral } from './entities/collateral.entity';

@Crud({
  model: {
    type: Collateral,
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
        exclude: ['password'],
        allow: ['username'],
      },
    },
  },
})
@Controller('collaterals')
export class CollateralsController implements CrudController<Collateral> {
  constructor(public service: CollateralsService) {}
}

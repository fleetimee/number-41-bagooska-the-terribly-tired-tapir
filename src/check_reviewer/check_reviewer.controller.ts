import { Controller } from '@nestjs/common';
import { CheckReviewerService } from './check_reviewer.service';
import { Crud, CrudController } from '@rewiko/crud';
import { CheckReviewer } from './entities/check_reviewer.entity';

@Crud({
  model: {
    type: CheckReviewer,
  },
})
@Controller('check-reviewer')
export class CheckReviewerController implements CrudController<CheckReviewer> {
  constructor(public service: CheckReviewerService) {}
}

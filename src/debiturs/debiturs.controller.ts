import { CreateDebiturDto } from './dto/create-debitur.dto';
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
  dto: {
    create: CreateDebiturDto,
  },
  query: {
    /* Telling the crud controller to join the nonfixed and fixed tables. */
    join: {
      nonfixed: {
        eager: true,
      },
      fixed: {
        eager: true,
      },
    },
  },
})
@Controller('debiturs')
export class DebitursController implements CrudController<Debitur> {
  constructor(public service: DebitursService) {}
}

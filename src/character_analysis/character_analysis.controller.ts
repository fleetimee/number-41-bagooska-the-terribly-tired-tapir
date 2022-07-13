import { Crud, CrudController } from '@rewiko/crud';
import { Controller } from '@nestjs/common';
import { CharacterAnalysisService } from './character_analysis.service';
import { CharacterAnalysis } from './entities/character_analysis.entity';

@Crud({
  model: {
    type: CharacterAnalysis,
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
@Controller('character_analysis')
export class CharacterAnalysisController
  implements CrudController<CharacterAnalysis>
{
  constructor(public service: CharacterAnalysisService) {}
}

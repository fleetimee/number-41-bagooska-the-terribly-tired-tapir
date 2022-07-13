import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { CharacterAnalysis } from './entities/character_analysis.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CharacterAnalysisService extends TypeOrmCrudService<CharacterAnalysis> {
  constructor(@InjectRepository(CharacterAnalysis) repo) {
    super(repo);
  }
}

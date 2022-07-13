import { Analysis } from './entities/analysis.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnalysisService extends TypeOrmCrudService<Analysis> {
  constructor(@InjectRepository(Analysis) repo) {
    super(repo);
  }
}

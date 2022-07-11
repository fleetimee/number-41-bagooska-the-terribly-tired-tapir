import { Submission } from './entities/submission.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';

@Injectable()
export class SubmissionsService extends TypeOrmCrudService<Submission> {
  constructor(@InjectRepository(Submission) repo) {
    super(repo);
  }
}

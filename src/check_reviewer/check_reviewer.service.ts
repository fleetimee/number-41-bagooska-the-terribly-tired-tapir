import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CheckReviewer } from './entities/check_reviewer.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';

@Injectable()
export class CheckReviewerService extends TypeOrmCrudService<CheckReviewer> {
  constructor(@InjectRepository(CheckReviewer) repo) {
    super(repo);
  }
}

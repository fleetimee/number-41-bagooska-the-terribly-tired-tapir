import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { NonFixed } from './entities/non-fixed.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NonFixedsService extends TypeOrmCrudService<NonFixed> {
  constructor(@InjectRepository(NonFixed) repo) {
    super(repo);
  }
}

import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { Debitur } from './entities/debitur.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DebitursService extends TypeOrmCrudService<Debitur> {
  constructor(@InjectRepository(Debitur) repo) {
    super(repo);
  }
}

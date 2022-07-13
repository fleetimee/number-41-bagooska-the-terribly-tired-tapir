import { Collateral } from './entities/collateral.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CollateralsService extends TypeOrmCrudService<Collateral> {
  constructor(@InjectRepository(Collateral) repo) {
    super(repo);
  }
}

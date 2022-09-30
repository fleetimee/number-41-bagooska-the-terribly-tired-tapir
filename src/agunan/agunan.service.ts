import { Agunan } from './entities/agunan.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgunanService extends TypeOrmCrudService<Agunan> {
  constructor(@InjectRepository(Agunan) repo) {
    super(repo);
  }
}

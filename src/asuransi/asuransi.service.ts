import { Asuransi } from './entities/asuransi.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AsuransiService extends TypeOrmCrudService<Asuransi> {
  constructor(@InjectRepository(Asuransi) repo) {
    super(repo);
  }
}

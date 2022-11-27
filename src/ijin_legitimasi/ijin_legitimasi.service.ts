import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IjinLegitimasi } from './entities/ijin_legitimasi.entity';

@Injectable()
export class IjinLegitimasiService extends TypeOrmCrudService<IjinLegitimasi> {
  constructor(@InjectRepository(IjinLegitimasi) repo) {
    super(repo);
  }
}

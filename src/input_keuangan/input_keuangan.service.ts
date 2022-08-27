import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';

import { InputKeuangan } from './entities/input_keuangan.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InputKeuanganService extends TypeOrmCrudService<InputKeuangan> {
  constructor(@InjectRepository(InputKeuangan) repo) {
    super(repo);
  }
}

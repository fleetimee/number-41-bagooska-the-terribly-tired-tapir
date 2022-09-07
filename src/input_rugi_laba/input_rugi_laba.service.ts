import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { InputRugiLaba } from './entities/input_rugi_laba.entity';

@Injectable()
export class InputRugiLabaService extends TypeOrmCrudService<InputRugiLaba> {
  constructor(@InjectRepository(InputRugiLaba) repo) {
    super(repo);
  }
}

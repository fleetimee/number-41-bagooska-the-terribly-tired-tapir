import { InputNeraca } from './entities/input_neraca.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InputNeracaService extends TypeOrmCrudService<InputNeraca> {
  constructor(@InjectRepository(InputNeraca) repo) {
    super(repo);
  }
}

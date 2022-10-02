import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { AgunanCash } from './entities/agunan_cash.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgunanCashService extends TypeOrmCrudService<AgunanCash> {
  constructor(@InjectRepository(AgunanCash) repo) {
    super(repo);
  }
}

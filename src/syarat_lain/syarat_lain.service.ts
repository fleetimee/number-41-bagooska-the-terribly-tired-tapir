import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { SyaratLain } from './entities/syarat_lain.entity';

@Injectable()
export class SyaratLainService extends TypeOrmCrudService<SyaratLain> {
  constructor(@InjectRepository(SyaratLain) repo) {
    super(repo);
  }
}

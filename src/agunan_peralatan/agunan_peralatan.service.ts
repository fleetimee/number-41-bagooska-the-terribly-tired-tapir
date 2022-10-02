import { AgunanPeralatan } from './entities/agunan_peralatan.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgunanPeralatanService extends TypeOrmCrudService<AgunanPeralatan> {
  constructor(@InjectRepository(AgunanPeralatan) repo) {
    super(repo);
  }
}

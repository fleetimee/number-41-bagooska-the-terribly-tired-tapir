import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { AgunanLo } from './entities/agunan_lo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgunanLosService extends TypeOrmCrudService<AgunanLo> {
  constructor(@InjectRepository(AgunanLo) repo) {
    super(repo);
  }
}

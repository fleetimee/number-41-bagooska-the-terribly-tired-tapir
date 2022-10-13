import { AgunanTanahBangunan } from './entities/agunan_tanah_bangunan.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgunanTanahBangunanService extends TypeOrmCrudService<AgunanTanahBangunan> {
  constructor(@InjectRepository(AgunanTanahBangunan) repo) {
    super(repo);
  }
}

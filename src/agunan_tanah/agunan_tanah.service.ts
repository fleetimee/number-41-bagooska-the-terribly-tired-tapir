import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { AgunanTanah } from './entities/agunan_tanah.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgunanTanahService extends TypeOrmCrudService<AgunanTanah> {
  constructor(@InjectRepository(AgunanTanah) repo) {
    super(repo);
  }
}

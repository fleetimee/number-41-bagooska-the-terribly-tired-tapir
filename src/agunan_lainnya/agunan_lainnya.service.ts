import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { AgunanLainnya } from './entities/agunan_lainnya.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgunanLainnyaService extends TypeOrmCrudService<AgunanLainnya> {
  constructor(@InjectRepository(AgunanLainnya) repo) {
    super(repo);
  }
}

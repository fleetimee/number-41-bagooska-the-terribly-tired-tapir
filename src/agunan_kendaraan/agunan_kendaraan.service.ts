import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { AgunanKendaraan } from './entities/agunan_kendaraan.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgunanKendaraanService extends TypeOrmCrudService<AgunanKendaraan> {
  constructor(@InjectRepository(AgunanKendaraan) repo) {
    super(repo);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pengajuan } from './entities/pengajuan.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';

@Injectable()
export class PengajuanService extends TypeOrmCrudService<Pengajuan> {
  constructor(@InjectRepository(Pengajuan) repo) {
    super(repo);
  }
}

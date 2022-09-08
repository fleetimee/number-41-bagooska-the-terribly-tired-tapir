import { AnalisaKeuangan } from './entities/analisa_keuangan.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnalisaKeuanganService extends TypeOrmCrudService<AnalisaKeuangan> {
  constructor(@InjectRepository(AnalisaKeuangan) repo) {
    super(repo);
  }
}

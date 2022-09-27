import { AnalisaJenisUsaha } from './entities/analisa_jenis_usaha.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnalisaJenisUsahaService extends TypeOrmCrudService<AnalisaJenisUsaha> {
  constructor(@InjectRepository(AnalisaJenisUsaha) repo) {
    super(repo);
  }
}

import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { AnalisaAgunan } from './entities/analisa_agunan.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnalisaAgunanService extends TypeOrmCrudService<AnalisaAgunan> {
  constructor(@InjectRepository(AnalisaAgunan) repo) {
    super(repo);
  }
}

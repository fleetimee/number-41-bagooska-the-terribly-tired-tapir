import { AnalisaBisni } from './entities/analisa_bisni.entity';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnalisaBisnisService extends TypeOrmCrudService<AnalisaBisni> {
  constructor(@InjectRepository(AnalisaBisni) repo) {
    super(repo);
  }
}

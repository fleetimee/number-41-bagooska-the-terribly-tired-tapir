import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { AnalisaKarakter } from './entities/analisa_karakter.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnalisaKarakterService extends TypeOrmCrudService<AnalisaKarakter> {
  constructor(@InjectRepository(AnalisaKarakter) repo) {
    super(repo);
  }
}

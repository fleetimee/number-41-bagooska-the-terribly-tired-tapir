import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Upload } from './entities/upload.entity';

@Injectable()
export class UploadsService extends TypeOrmCrudService<Upload> {
  constructor(@InjectRepository(Upload) repo) {
    super(repo);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Fixed } from './entities/fixed.entity';

@Injectable()
export class FixedsService extends TypeOrmCrudService<Fixed> {
  /**
   * A constructor function that injects the repository into the class.
   * @param repo - The repository that will be used to perform the CRUD operations.
   */
  constructor(@InjectRepository(Fixed) repo) {
    super(repo);
  }
}

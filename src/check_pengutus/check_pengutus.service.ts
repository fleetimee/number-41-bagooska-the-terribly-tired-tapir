import { Injectable } from '@nestjs/common';
import { CreateCheckPengutusDto } from './dto/create-check_pengutus.dto';
import { UpdateCheckPengutusDto } from './dto/update-check_pengutus.dto';
import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { CheckPengutus } from './entities/check_pengutus.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CheckPengutusService extends TypeOrmCrudService<CheckPengutus> {
  constructor(@InjectRepository(CheckPengutus) repo) {
    super(repo);
  }
}

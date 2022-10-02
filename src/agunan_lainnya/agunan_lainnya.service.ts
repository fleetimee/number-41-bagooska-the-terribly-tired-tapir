import { Injectable } from '@nestjs/common';
import { CreateAgunanLainnyaDto } from './dto/create-agunan_lainnya.dto';
import { UpdateAgunanLainnyaDto } from './dto/update-agunan_lainnya.dto';

@Injectable()
export class AgunanLainnyaService {
  create(createAgunanLainnyaDto: CreateAgunanLainnyaDto) {
    return 'This action adds a new agunanLainnya';
  }

  findAll() {
    return `This action returns all agunanLainnya`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agunanLainnya`;
  }

  update(id: number, updateAgunanLainnyaDto: UpdateAgunanLainnyaDto) {
    return `This action updates a #${id} agunanLainnya`;
  }

  remove(id: number) {
    return `This action removes a #${id} agunanLainnya`;
  }
}

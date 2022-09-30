import { Injectable } from '@nestjs/common';
import { CreateAgunanKioDto } from './dto/create-agunan_kio.dto';
import { UpdateAgunanKioDto } from './dto/update-agunan_kio.dto';

@Injectable()
export class AgunanKiosService {
  create(createAgunanKioDto: CreateAgunanKioDto) {
    return 'This action adds a new agunanKio';
  }

  findAll() {
    return `This action returns all agunanKios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agunanKio`;
  }

  update(id: number, updateAgunanKioDto: UpdateAgunanKioDto) {
    return `This action updates a #${id} agunanKio`;
  }

  remove(id: number) {
    return `This action removes a #${id} agunanKio`;
  }
}

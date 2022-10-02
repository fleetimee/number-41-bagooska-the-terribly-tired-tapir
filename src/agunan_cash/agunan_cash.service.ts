import { Injectable } from '@nestjs/common';
import { CreateAgunanCashDto } from './dto/create-agunan_cash.dto';
import { UpdateAgunanCashDto } from './dto/update-agunan_cash.dto';

@Injectable()
export class AgunanCashService {
  create(createAgunanCashDto: CreateAgunanCashDto) {
    return 'This action adds a new agunanCash';
  }

  findAll() {
    return `This action returns all agunanCash`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agunanCash`;
  }

  update(id: number, updateAgunanCashDto: UpdateAgunanCashDto) {
    return `This action updates a #${id} agunanCash`;
  }

  remove(id: number) {
    return `This action removes a #${id} agunanCash`;
  }
}

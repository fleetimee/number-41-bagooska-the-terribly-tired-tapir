import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgunanCashService } from './agunan_cash.service';
import { CreateAgunanCashDto } from './dto/create-agunan_cash.dto';
import { UpdateAgunanCashDto } from './dto/update-agunan_cash.dto';

@Controller('agunan-cash')
export class AgunanCashController {
  constructor(private readonly agunanCashService: AgunanCashService) {}

  @Post()
  create(@Body() createAgunanCashDto: CreateAgunanCashDto) {
    return this.agunanCashService.create(createAgunanCashDto);
  }

  @Get()
  findAll() {
    return this.agunanCashService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agunanCashService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgunanCashDto: UpdateAgunanCashDto) {
    return this.agunanCashService.update(+id, updateAgunanCashDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agunanCashService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgunanKiosService } from './agunan_kios.service';
import { CreateAgunanKioDto } from './dto/create-agunan_kio.dto';
import { UpdateAgunanKioDto } from './dto/update-agunan_kio.dto';

@Controller('agunan-kios')
export class AgunanKiosController {
  constructor(private readonly agunanKiosService: AgunanKiosService) {}

  @Post()
  create(@Body() createAgunanKioDto: CreateAgunanKioDto) {
    return this.agunanKiosService.create(createAgunanKioDto);
  }

  @Get()
  findAll() {
    return this.agunanKiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agunanKiosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgunanKioDto: UpdateAgunanKioDto) {
    return this.agunanKiosService.update(+id, updateAgunanKioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agunanKiosService.remove(+id);
  }
}

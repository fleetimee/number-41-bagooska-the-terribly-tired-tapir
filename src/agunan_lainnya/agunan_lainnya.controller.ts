import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgunanLainnyaService } from './agunan_lainnya.service';
import { CreateAgunanLainnyaDto } from './dto/create-agunan_lainnya.dto';
import { UpdateAgunanLainnyaDto } from './dto/update-agunan_lainnya.dto';

@Controller('agunan-lainnya')
export class AgunanLainnyaController {
  constructor(private readonly agunanLainnyaService: AgunanLainnyaService) {}

  @Post()
  create(@Body() createAgunanLainnyaDto: CreateAgunanLainnyaDto) {
    return this.agunanLainnyaService.create(createAgunanLainnyaDto);
  }

  @Get()
  findAll() {
    return this.agunanLainnyaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agunanLainnyaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgunanLainnyaDto: UpdateAgunanLainnyaDto) {
    return this.agunanLainnyaService.update(+id, updateAgunanLainnyaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agunanLainnyaService.remove(+id);
  }
}

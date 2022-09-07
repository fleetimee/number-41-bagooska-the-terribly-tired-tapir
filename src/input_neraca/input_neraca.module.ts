import { Module } from '@nestjs/common';
import { InputNeracaService } from './input_neraca.service';
import { InputNeracaController } from './input_neraca.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InputNeraca } from './entities/input_neraca.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InputNeraca])],
  controllers: [InputNeracaController],
  exports: [InputNeracaService],
  providers: [InputNeracaService],
})
export class InputNeracaModule {}

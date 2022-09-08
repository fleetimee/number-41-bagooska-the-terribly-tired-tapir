import { InputRugiLaba } from './entities/input_rugi_laba.entity';
import { Module } from '@nestjs/common';
import { InputRugiLabaService } from './input_rugi_laba.service';
import { InputRugiLabaController } from './input_rugi_laba.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InputRugiLaba])],
  exports: [InputRugiLabaService],
  controllers: [InputRugiLabaController],
  providers: [InputRugiLabaService],
})
export class InputRugiLabaModule {}

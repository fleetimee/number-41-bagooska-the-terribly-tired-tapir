import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AnalisaAgunanService } from './analisa_agunan.service';
import { AnalisaAgunanController } from './analisa_agunan.controller';
import { AnalisaAgunan } from './entities/analisa_agunan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnalisaAgunan])],
  controllers: [AnalisaAgunanController],
  providers: [AnalisaAgunanService],
  exports: [AnalisaAgunanService],
})
export class AnalisaAgunanModule {}

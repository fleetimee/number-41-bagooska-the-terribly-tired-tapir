import { AnalisaBisni } from './entities/analisa_bisni.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AnalisaBisnisService } from './analisa_bisnis.service';
import { AnalisaBisnisController } from './analisa_bisnis.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AnalisaBisni])],
  exports: [AnalisaBisnisService],
  controllers: [AnalisaBisnisController],
  providers: [AnalisaBisnisService],
})
export class AnalisaBisnisModule {}

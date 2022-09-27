import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AnalisaJenisUsahaService } from './analisa_jenis_usaha.service';
import { AnalisaJenisUsahaController } from './analisa_jenis_usaha.controller';
import { AnalisaJenisUsaha } from './entities/analisa_jenis_usaha.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnalisaJenisUsaha])],
  controllers: [AnalisaJenisUsahaController],
  providers: [AnalisaJenisUsahaService],
})
export class AnalisaJenisUsahaModule {}

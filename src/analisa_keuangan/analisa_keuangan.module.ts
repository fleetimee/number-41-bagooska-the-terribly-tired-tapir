import { Module } from '@nestjs/common';
import { AnalisaKeuanganService } from './analisa_keuangan.service';
import { AnalisaKeuanganController } from './analisa_keuangan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalisaKeuangan } from './entities/analisa_keuangan.entity';

@Module({
  controllers: [AnalisaKeuanganController],
  providers: [AnalisaKeuanganService],
  imports: [TypeOrmModule.forFeature([AnalisaKeuangan])],
  exports: [AnalisaKeuanganService],
})
export class AnalisaKeuanganModule {}

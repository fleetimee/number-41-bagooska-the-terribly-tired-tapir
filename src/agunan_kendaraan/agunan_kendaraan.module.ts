import { Module } from '@nestjs/common';
import { AgunanKendaraanService } from './agunan_kendaraan.service';
import { AgunanKendaraanController } from './agunan_kendaraan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgunanKendaraan } from './entities/agunan_kendaraan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgunanKendaraan])],
  exports: [AgunanKendaraanService],
  controllers: [AgunanKendaraanController],
  providers: [AgunanKendaraanService],
})
export class AgunanKendaraanModule {}

import { Module } from '@nestjs/common';
import { PengajuanService } from './pengajuan.service';
import { PengajuanController } from './pengajuan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pengajuan } from './entities/pengajuan.entity';
import {
  FirebaseAdminModule,
  FirebaseMessagingService,
} from '@redredgroup/nestjs-firebase-admin';

@Module({
  imports: [TypeOrmModule.forFeature([Pengajuan])],
  exports: [PengajuanService],
  controllers: [PengajuanController],
  providers: [PengajuanService],
})
export class PengajuanModule {}

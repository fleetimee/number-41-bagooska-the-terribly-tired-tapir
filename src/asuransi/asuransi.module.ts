import { Asuransi } from './entities/asuransi.entity';
import { Module } from '@nestjs/common';
import { AsuransiService } from './asuransi.service';
import { AsuransiController } from './asuransi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Asuransi])],
  controllers: [AsuransiController],
  providers: [AsuransiService],
  exports: [AsuransiService],
})
export class AsuransiModule {}

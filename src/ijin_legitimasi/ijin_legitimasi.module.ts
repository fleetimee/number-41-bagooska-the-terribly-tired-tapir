import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { IjinLegitimasiService } from './ijin_legitimasi.service';
import { IjinLegitimasiController } from './ijin_legitimasi.controller';
import { IjinLegitimasi } from './entities/ijin_legitimasi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IjinLegitimasi])],
  controllers: [IjinLegitimasiController],
  providers: [IjinLegitimasiService],
  exports: [IjinLegitimasiService],
})
export class IjinLegitimasiModule {}

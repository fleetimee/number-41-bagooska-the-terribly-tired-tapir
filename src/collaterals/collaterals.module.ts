import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CollateralsService } from './collaterals.service';
import { CollateralsController } from './collaterals.controller';
import { Collateral } from './entities/collateral.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collateral])],
  controllers: [CollateralsController],
  providers: [CollateralsService],
})
export class CollateralsModule {}

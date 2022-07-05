import { Fixed } from './entities/fixed.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FixedsService } from './fixeds.service';
import { FixedsController } from './fixeds.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Fixed])],
  controllers: [FixedsController],
  providers: [FixedsService],
  exports: [FixedsService],
})
export class FixedsModule {}

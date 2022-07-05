import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NonFixedsService } from './non-fixeds.service';
import { NonFixedsController } from './non-fixeds.controller';
import { NonFixed } from './entities/non-fixed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NonFixed])],
  controllers: [NonFixedsController],
  providers: [NonFixedsService],
  exports: [NonFixedsService],
})
export class NonFixedsModule {}

import { Agunan } from './entities/agunan.entity';
import { Module } from '@nestjs/common';
import { AgunanService } from './agunan.service';
import { AgunanController } from './agunan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Agunan])],
  exports: [AgunanService],
  controllers: [AgunanController],
  providers: [AgunanService],
})
export class AgunanModule {}

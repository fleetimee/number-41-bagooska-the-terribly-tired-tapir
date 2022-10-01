import { Module } from '@nestjs/common';
import { AgunanLosService } from './agunan_los.service';
import { AgunanLosController } from './agunan_los.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgunanLo } from './entities/agunan_lo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgunanLo])],
  exports: [AgunanLosService],
  controllers: [AgunanLosController],
  providers: [AgunanLosService],
})
export class AgunanLosModule {}

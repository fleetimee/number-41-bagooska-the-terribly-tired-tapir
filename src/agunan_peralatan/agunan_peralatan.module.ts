import { Module } from '@nestjs/common';
import { AgunanPeralatanService } from './agunan_peralatan.service';
import { AgunanPeralatanController } from './agunan_peralatan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgunanPeralatan } from './entities/agunan_peralatan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgunanPeralatan])],
  exports: [AgunanPeralatanService],
  controllers: [AgunanPeralatanController],
  providers: [AgunanPeralatanService],
})
export class AgunanPeralatanModule {}

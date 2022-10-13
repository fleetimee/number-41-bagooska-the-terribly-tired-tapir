import { Module } from '@nestjs/common';
import { AgunanTanahBangunanService } from './agunan_tanah_bangunan.service';
import { AgunanTanahBangunanController } from './agunan_tanah_bangunan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgunanTanahBangunan } from './entities/agunan_tanah_bangunan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgunanTanahBangunan])],
  controllers: [AgunanTanahBangunanController],
  providers: [AgunanTanahBangunanService],
  exports: [AgunanTanahBangunanService],
})
export class AgunanTanahBangunanModule {}

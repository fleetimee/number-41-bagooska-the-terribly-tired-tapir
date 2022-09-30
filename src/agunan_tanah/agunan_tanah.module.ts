import { Module } from '@nestjs/common';
import { AgunanTanahService } from './agunan_tanah.service';
import { AgunanTanahController } from './agunan_tanah.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgunanTanah } from './entities/agunan_tanah.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgunanTanah])],
  controllers: [AgunanTanahController],
  exports: [AgunanTanahService],
  providers: [AgunanTanahService],
})
export class AgunanTanahModule {}

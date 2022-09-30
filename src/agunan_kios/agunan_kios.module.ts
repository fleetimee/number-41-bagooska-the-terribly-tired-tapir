import { Module } from '@nestjs/common';
import { AgunanKiosService } from './agunan_kios.service';
import { AgunanKiosController } from './agunan_kios.controller';

@Module({
  controllers: [AgunanKiosController],
  providers: [AgunanKiosService]
})
export class AgunanKiosModule {}

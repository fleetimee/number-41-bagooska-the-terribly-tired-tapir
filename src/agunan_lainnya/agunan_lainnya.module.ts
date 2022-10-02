import { Module } from '@nestjs/common';
import { AgunanLainnyaService } from './agunan_lainnya.service';
import { AgunanLainnyaController } from './agunan_lainnya.controller';

@Module({
  controllers: [AgunanLainnyaController],
  providers: [AgunanLainnyaService]
})
export class AgunanLainnyaModule {}

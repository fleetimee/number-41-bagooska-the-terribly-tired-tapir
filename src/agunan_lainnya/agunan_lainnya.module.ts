import { Module } from '@nestjs/common';
import { AgunanLainnyaService } from './agunan_lainnya.service';
import { AgunanLainnyaController } from './agunan_lainnya.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgunanLainnya } from './entities/agunan_lainnya.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgunanLainnya])],
  controllers: [AgunanLainnyaController],
  exports: [AgunanLainnyaService],
  providers: [AgunanLainnyaService],
})
export class AgunanLainnyaModule {}

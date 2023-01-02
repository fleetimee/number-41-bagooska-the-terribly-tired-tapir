import { Module } from '@nestjs/common';
import { CheckPengutusService } from './check_pengutus.service';
import { CheckPengutusController } from './check_pengutus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckPengutus } from './entities/check_pengutus.entity';

@Module({
  controllers: [CheckPengutusController],
  providers: [CheckPengutusService],
  imports: [TypeOrmModule.forFeature([CheckPengutus])],
  exports: [CheckPengutusService],
})
export class CheckPengutusModule {}

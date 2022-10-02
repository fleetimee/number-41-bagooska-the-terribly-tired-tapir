import { Module } from '@nestjs/common';
import { AgunanCashService } from './agunan_cash.service';
import { AgunanCashController } from './agunan_cash.controller';

@Module({
  controllers: [AgunanCashController],
  providers: [AgunanCashService]
})
export class AgunanCashModule {}

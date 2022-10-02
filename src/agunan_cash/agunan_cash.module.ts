import { AgunanCash } from './entities/agunan_cash.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AgunanCashService } from './agunan_cash.service';
import { AgunanCashController } from './agunan_cash.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgunanCash])],
  exports: [AgunanCashService],
  controllers: [AgunanCashController],
  providers: [AgunanCashService],
})
export class AgunanCashModule {}

import { Module } from '@nestjs/common';
import { DebitursController } from './debiturs.controller';
import { DebitursService } from './debiturs.service';

@Module({
  controllers: [DebitursController],
  providers: [DebitursService],
})
export class DebitursModule {}
